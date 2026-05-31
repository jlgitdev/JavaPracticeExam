import { questions } from "./questions.js";

const STORAGE_KEY = "javaQuiz.progress.v1";
const PROGRESS_VERSION = 1;
const QUIZ_ID = "mvhs-java-practice-final";
const questionIds = questions.map((question, index) => {
  return typeof question.id === "string" && question.id.length > 0
    ? question.id
    : `chapter-${question.chapter ?? "unknown"}-question-${question.sourceNumber ?? index + 1}`;
});
const questionIndexById = new Map(questionIds.map((id, index) => [id, index]));
const questionIdSet = new Set(questionIds);

const state = {
  index: 0,
  answers: questions.map(() => []),
  checked: questions.map(() => false),
  marked: questions.map(() => false),
  eliminated: questions.map(() => []),
  completed: false,
  jumpOpen: false,
  uiMode: "classic",
};

const elements = {
  body: document.body,
  quizView: document.querySelector("#quiz-view"),
  dashboardView: document.querySelector("#dashboard-view"),
  uiModeToggle: document.querySelector("#ui-mode-toggle"),
  uiModeToggleLabel: document.querySelector("#ui-mode-toggle-label"),
  chapterLabel: document.querySelector("#chapter-label"),
  sectionLabel: document.querySelector("#section-label"),
  questionCount: document.querySelector("#question-count"),
  questionMode: document.querySelector("#question-mode"),
  questionNumberBadge: document.querySelector("#question-number-badge"),
  answerInstructions: document.querySelector("#answer-instructions"),
  progressFill: document.querySelector("#progress-fill"),
  questionText: document.querySelector("#question-text"),
  choices: document.querySelector("#choices"),
  feedback: document.querySelector("#feedback"),
  markButton: document.querySelector("#mark-button"),
  markButtonLabel: document.querySelector("#mark-button-label"),
  inlineActionsMount: document.querySelector("#inline-actions-mount"),
  dockActionsMount: document.querySelector("#dock-actions-mount"),
  actions: document.querySelector("#quiz-actions"),
  previousButton: document.querySelector("#previous-button"),
  checkButton: document.querySelector("#check-button"),
  nextButton: document.querySelector("#next-button"),
  restartButton: document.querySelector("#restart-button"),
  stats: document.querySelector("#stats"),
  chapterSummary: document.querySelector("#chapter-summary"),
  missedList: document.querySelector("#missed-list"),
  jumpBackdrop: document.querySelector("#jump-backdrop"),
  jumpDock: document.querySelector("#jump-dock"),
  jumpToggle: document.querySelector("#jump-toggle"),
  jumpToggleLabel: document.querySelector("#jump-toggle-label"),
  jumpPanel: document.querySelector("#jump-panel"),
  jumpPanelCount: document.querySelector("#jump-panel-count"),
  jumpCurrent: document.querySelector("#jump-current"),
  jumpGrid: document.querySelector("#jump-grid"),
};

function normalizeLetters(letters) {
  return [...letters].sort();
}

function formatLetters(letters) {
  return normalizeLetters(letters)
    .map((letter) => letter.toUpperCase())
    .join(", ");
}

function clampQuestionIndex(index) {
  if (!Number.isFinite(index) || questions.length === 0) {
    return 0;
  }

  return Math.min(Math.max(Math.trunc(index), 0), questions.length - 1);
}

function decodeAnswerValue(value) {
  if (Array.isArray(value)) {
    return value
      .filter((letter) => typeof letter === "string")
      .map((letter) => letter.trim().toLowerCase())
      .filter(Boolean);
  }

  if (typeof value !== "string") {
    return [];
  }

  return value
    .split(",")
    .map((letter) => letter.trim().toLowerCase())
    .filter(Boolean);
}

function getValidAnswersForQuestion(question, value) {
  const validLetters = new Set(question.options.map((option) => option.letter));
  return normalizeLetters([...new Set(decodeAnswerValue(value))]).filter((letter) =>
    validLetters.has(letter),
  );
}

function encodeAnswerValue(answers) {
  return normalizeLetters(answers).join(",");
}

function normalizeProgress(progress) {
  if (
    !progress ||
    progress.version !== PROGRESS_VERSION ||
    progress.quizId !== QUIZ_ID ||
    typeof progress.selectedAnswersByQuestionId !== "object" ||
    progress.selectedAnswersByQuestionId === null ||
    Array.isArray(progress.selectedAnswersByQuestionId)
  ) {
    return null;
  }

  const selectedAnswersByQuestionId = {};
  const eliminatedAnswersByQuestionId = {};
  const checkedQuestionIds = Array.isArray(progress.checkedQuestionIds)
    ? progress.checkedQuestionIds.filter((questionId) => questionIdSet.has(questionId))
    : [];
  const markedQuestionIds = Array.isArray(progress.markedQuestionIds)
    ? progress.markedQuestionIds.filter((questionId) => questionIdSet.has(questionId))
    : [];

  for (const [questionId, value] of Object.entries(progress.selectedAnswersByQuestionId)) {
    if (!questionIdSet.has(questionId)) {
      continue;
    }

    const questionIndex = questionIndexById.get(questionId);
    const validAnswers = getValidAnswersForQuestion(questions[questionIndex], value);

    if (validAnswers.length > 0) {
      selectedAnswersByQuestionId[questionId] = encodeAnswerValue(validAnswers);
    }
  }

  if (
    typeof progress.eliminatedAnswersByQuestionId === "object" &&
    progress.eliminatedAnswersByQuestionId !== null &&
    !Array.isArray(progress.eliminatedAnswersByQuestionId)
  ) {
    for (const [questionId, value] of Object.entries(progress.eliminatedAnswersByQuestionId)) {
      if (!questionIdSet.has(questionId)) {
        continue;
      }

      const questionIndex = questionIndexById.get(questionId);
      const validAnswers = getValidAnswersForQuestion(questions[questionIndex], value);

      if (validAnswers.length > 0) {
        eliminatedAnswersByQuestionId[questionId] = encodeAnswerValue(validAnswers);
      }
    }
  }

  return {
    version: PROGRESS_VERSION,
    quizId: QUIZ_ID,
    currentQuestionIndex: clampQuestionIndex(progress.currentQuestionIndex),
    selectedAnswersByQuestionId,
    checkedQuestionIds,
    markedQuestionIds,
    eliminatedAnswersByQuestionId,
    completed: progress.completed === true,
    score: Number.isFinite(progress.score) ? progress.score : 0,
    updatedAt:
      typeof progress.updatedAt === "string" && progress.updatedAt.length > 0
        ? progress.updatedAt
        : new Date().toISOString(),
  };
}

function loadProgress() {
  try {
    const rawProgress = localStorage.getItem(STORAGE_KEY);
    return rawProgress ? normalizeProgress(JSON.parse(rawProgress)) : null;
  } catch {
    return null;
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Storage can be unavailable in private browsing or locked-down environments.
  }
}

function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage can be unavailable in private browsing or locked-down environments.
  }
}

function buildProgress(completed = state.completed) {
  const selectedAnswersByQuestionId = {};
  const eliminatedAnswersByQuestionId = {};
  const checkedQuestionIds = [];
  const markedQuestionIds = [];

  state.answers.forEach((answers, index) => {
    if (answers.length > 0) {
      selectedAnswersByQuestionId[questionIds[index]] = encodeAnswerValue(answers);
    }
  });

  state.checked.forEach((checked, index) => {
    if (checked) {
      checkedQuestionIds.push(questionIds[index]);
    }
  });

  state.marked.forEach((marked, index) => {
    if (marked) {
      markedQuestionIds.push(questionIds[index]);
    }
  });

  state.eliminated.forEach((answers, index) => {
    if (answers.length > 0) {
      eliminatedAnswersByQuestionId[questionIds[index]] = encodeAnswerValue(answers);
    }
  });

  const results = getResults();
  const score = results.total === 0 ? 0 : Math.round((results.correct / results.total) * 100);

  return {
    version: PROGRESS_VERSION,
    quizId: QUIZ_ID,
    currentQuestionIndex: clampQuestionIndex(state.index),
    selectedAnswersByQuestionId,
    checkedQuestionIds,
    markedQuestionIds,
    eliminatedAnswersByQuestionId,
    completed,
    score,
    updatedAt: new Date().toISOString(),
  };
}

function persistProgress() {
  saveProgress(buildProgress());
}

function applyProgress(progress) {
  state.index = progress.currentQuestionIndex;
  state.answers = questions.map((question, index) => {
    const savedAnswer = progress.selectedAnswersByQuestionId[questionIds[index]];
    return getValidAnswersForQuestion(question, savedAnswer);
  });
  state.checked = questions.map((question, index) =>
    progress.checkedQuestionIds.includes(questionIds[index]),
  );
  state.marked = questions.map((question, index) =>
    progress.markedQuestionIds.includes(questionIds[index]),
  );
  state.eliminated = questions.map((question, index) => {
    const savedEliminated = progress.eliminatedAnswersByQuestionId[questionIds[index]];
    return getValidAnswersForQuestion(question, savedEliminated);
  });
  state.completed = progress.completed;
}

function isCorrect(question, selected) {
  const expected = normalizeLetters(question.correct);
  const actual = normalizeLetters(selected);
  return expected.length === actual.length && expected.every((letter, index) => letter === actual[index]);
}

function getSelectedInputs() {
  return [...elements.choices.querySelectorAll("input:checked")].map((input) => input.value);
}

function isAnswerLocked(index = state.index) {
  return state.checked[index];
}

function updateChoiceSelection() {
  for (const choice of elements.choices.querySelectorAll(".choice")) {
    const input = choice.querySelector("input");
    choice.classList.toggle("selected", input?.checked ?? false);
  }
}

function saveCurrentAnswer() {
  if (isAnswerLocked()) {
    return;
  }

  state.answers[state.index] = getSelectedInputs();
}

function toggleEliminated(letter) {
  const eliminated = new Set(state.eliminated[state.index]);

  if (eliminated.has(letter)) {
    eliminated.delete(letter);
  } else {
    eliminated.add(letter);
  }

  state.eliminated[state.index] = [...eliminated];
}

function getStrikeLabel(letter, eliminated) {
  const answer = letter.toUpperCase();
  return eliminated ? `Restore answer ${answer}` : `Cross out answer ${answer}`;
}

function renderMarkState() {
  const marked = state.marked[state.index];
  elements.markButton.classList.toggle("marked", marked);
  elements.markButton.setAttribute("aria-pressed", String(marked));
  elements.markButtonLabel.textContent = marked ? "Marked for Review" : "Mark for Review";
}

function placeActions() {
  const target = state.uiMode === "bluebook" ? elements.dockActionsMount : elements.inlineActionsMount;

  if (elements.actions.parentElement !== target) {
    target.append(elements.actions);
  }
}

function updateJumpToggleState() {
  const open = state.jumpOpen;
  const classicLabel = open ? "Close" : "Questions";
  const bluebookLabel = open ? "Close" : "Open";

  elements.jumpToggleLabel.textContent = state.uiMode === "bluebook" ? bluebookLabel : classicLabel;
  elements.jumpToggle.setAttribute(
    "aria-label",
    open ? "Close question overview" : "Open question overview",
  );
}

function setUiMode(mode) {
  state.uiMode = mode;
  elements.body.dataset.uiMode = mode;
  elements.uiModeToggle.setAttribute("aria-pressed", String(mode === "bluebook"));
  elements.uiModeToggle.setAttribute(
    "aria-label",
    mode === "bluebook" ? "Switch to classic quiz UI" : "Switch to AP exam-style UI",
  );
  elements.uiModeToggleLabel.textContent = mode === "bluebook" ? "Classic mode" : "AP Exam-Style Mode";
  placeActions();
  updateJumpToggleState();
}

function looksLikeCodeBlock(block) {
  return (
    /[{};]/.test(block) ||
    /^\s{2,}\S/m.test(block) ||
    /^\s*(public|private|protected|class|if|else|for|while|switch|String|int|double|char|boolean|System\.out|return|new)\b/m.test(
      block,
    )
  );
}

function renderPrompt(question) {
  const blocks = `${question.sourceNumber}. ${question.prompt}`.split(/\n{2,}/);
  const renderBlocks = [];
  elements.questionText.innerHTML = "";

  for (const block of blocks) {
    const isCode = looksLikeCodeBlock(block);
    const previousBlock = renderBlocks.at(-1);

    if (isCode && previousBlock?.isCode) {
      previousBlock.text = `${previousBlock.text}\n\n${block}`;
      continue;
    }

    renderBlocks.push({ text: block, isCode });
  }

  for (const block of renderBlocks) {
    const node = document.createElement(block.isCode ? "pre" : "p");
    node.textContent = block.text;
    if (block.isCode) {
      node.className = "code-block";
    }
    elements.questionText.append(node);
  }
}

function buildJumpMenu() {
  let currentChapter = null;

  elements.jumpPanelCount.textContent = `${questions.length} total`;

  questions.forEach((question, index) => {
    if (question.chapter !== currentChapter) {
      currentChapter = question.chapter;

      const heading = document.createElement("h3");
      heading.className = "jump-chapter";
      heading.textContent = question.chapterTitle;
      elements.jumpGrid.append(heading);
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "jump-question";
    button.dataset.index = String(index);
    button.textContent = String(index + 1);
    button.setAttribute(
      "aria-label",
      `Jump to question ${index + 1}, ${question.chapterTitle}`,
    );
    button.addEventListener("click", () => {
      saveCurrentAnswer();
      state.index = index;
      state.completed = false;
      setJumpOpen(false);
      renderQuestion();
      persistProgress();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    elements.jumpGrid.append(button);
  });
}

function updateJumpMenu() {
  elements.jumpCurrent.textContent = `Question ${state.index + 1} of ${questions.length}`;

  for (const button of elements.jumpGrid.querySelectorAll(".jump-question")) {
    const index = Number(button.dataset.index);
    const answered = state.answers[index].length > 0;
    const checked = state.checked[index];
    const marked = state.marked[index];
    const correct = checked && answered && isCorrect(questions[index], state.answers[index]);

    button.classList.toggle("current", index === state.index);
    button.classList.toggle("answered", answered && !checked);
    button.classList.toggle("marked", marked);
    button.classList.toggle("correct", correct);
    button.classList.toggle("wrong", checked && !correct);
    button.setAttribute("aria-current", index === state.index ? "true" : "false");
  }
}

function setJumpOpen(open) {
  state.jumpOpen = open;
  elements.jumpPanel.hidden = !open;
  elements.jumpBackdrop.hidden = !open;
  elements.jumpToggle.setAttribute("aria-expanded", String(open));
  updateJumpToggleState();
}

function renderQuestion() {
  const question = questions[state.index];
  const selected = new Set(state.answers[state.index]);
  const eliminated = new Set(state.eliminated[state.index]);
  const usesCheckboxes = question.correct.length > 1;
  const answerLocked = isAnswerLocked();
  const progressPercent = ((state.index + 1) / questions.length) * 100;

  elements.quizView.hidden = false;
  elements.dashboardView.hidden = true;
  elements.jumpDock.hidden = false;
  state.completed = false;
  elements.chapterLabel.textContent = question.chapterTitle;
  elements.sectionLabel.textContent = question.section || `Chapter ${question.chapter}`;
  elements.questionCount.textContent = `Question ${state.index + 1} of ${questions.length}`;
  elements.questionMode.textContent = usesCheckboxes ? "Select all that apply" : "Select one";
  elements.questionNumberBadge.textContent = String(state.index + 1);
  elements.answerInstructions.textContent = usesCheckboxes
    ? "Select all answers that apply."
    : "Select one answer.";
  elements.progressFill.style.width = `${progressPercent}%`;
  renderPrompt(question);
  elements.choices.innerHTML = "";

  for (const option of question.options) {
    const choiceRow = document.createElement("div");
    choiceRow.className = "choice-row";
    choiceRow.dataset.letter = option.letter;
    choiceRow.classList.toggle("eliminated", eliminated.has(option.letter));

    const choice = document.createElement("label");
    choice.className = "choice";
    choice.dataset.letter = option.letter;
    choice.classList.toggle("locked", answerLocked);
    choice.setAttribute("aria-disabled", String(answerLocked));

    const input = document.createElement("input");
    input.type = usesCheckboxes ? "checkbox" : "radio";
    input.name = "answer";
    input.value = option.letter;
    input.checked = selected.has(option.letter);
    input.disabled = answerLocked;
    input.addEventListener("change", () => {
      if (isAnswerLocked()) {
        return;
      }

      saveCurrentAnswer();
      state.completed = false;
      persistProgress();
      updateChoiceSelection();
      updateJumpMenu();
    });

    const letter = document.createElement("span");
    letter.className = "choice-letter";
    letter.textContent = option.letter.toUpperCase();
    letter.setAttribute("aria-hidden", "true");

    const text = document.createElement("span");
    text.className = "choice-text";
    const prefix = document.createElement("span");
    prefix.className = "choice-prefix";
    prefix.textContent = `${option.letter.toUpperCase()}. `;
    const optionText = document.createElement("span");
    optionText.className = "choice-option";
    optionText.textContent = option.text;
    text.append(prefix, optionText);

    choice.append(input, letter, text);
    choice.classList.toggle("selected", input.checked);

    const strikeButton = document.createElement("button");
    strikeButton.type = "button";
    strikeButton.className = "strike-button";
    strikeButton.dataset.letter = option.letter;
    strikeButton.setAttribute(
      "aria-label",
      getStrikeLabel(option.letter, eliminated.has(option.letter)),
    );
    strikeButton.setAttribute(
      "aria-pressed",
      String(eliminated.has(option.letter)),
    );
    const strikeLabel = document.createElement("span");
    strikeLabel.textContent = option.letter.toUpperCase();
    strikeButton.append(strikeLabel);
    strikeButton.addEventListener("click", () => {
      toggleEliminated(option.letter);
      const nowEliminated = state.eliminated[state.index].includes(option.letter);
      choiceRow.classList.toggle("eliminated", nowEliminated);
      strikeButton.setAttribute("aria-pressed", String(nowEliminated));
      strikeButton.setAttribute(
        "aria-label",
        getStrikeLabel(option.letter, nowEliminated),
      );
      persistProgress();
    });

    choiceRow.append(choice, strikeButton);
    elements.choices.append(choiceRow);
  }

  elements.previousButton.disabled = state.index === 0;
  elements.checkButton.disabled = answerLocked;
  elements.checkButton.textContent = answerLocked ? "Answer checked" : "Check answer";
  elements.nextButton.textContent = state.index === questions.length - 1 ? "Finish" : "Next";

  if (state.checked[state.index]) {
    renderFeedback();
  } else {
    elements.feedback.hidden = true;
    elements.feedback.className = "feedback";
  }

  renderMarkState();
  updateJumpMenu();
}

function renderFeedback() {
  const question = questions[state.index];
  const selected = state.answers[state.index];
  const correct = isCorrect(question, selected);

  for (const choice of elements.choices.querySelectorAll(".choice")) {
    const letter = choice.dataset.letter;
    choice.classList.toggle("correct", question.correct.includes(letter));
    choice.classList.toggle("wrong", selected.includes(letter) && !question.correct.includes(letter));
  }

  elements.feedback.hidden = false;
  elements.feedback.className = `feedback ${correct ? "correct" : "wrong"}`;
  elements.feedback.textContent = correct
    ? "Correct."
    : `Correct answer: ${formatLetters(question.correct)}`;
  updateJumpMenu();
}

function getResults() {
  return questions.reduce(
    (results, question, index) => {
      const selected = state.answers[index];
      const chapterKey = String(question.chapter);
      const chapter = results.byChapter.get(chapterKey) ?? {
        chapter: question.chapter,
        title: question.chapterTitle,
        total: 0,
        correct: 0,
        incorrect: 0,
        skipped: 0,
      };

      const skipped = selected.length === 0;
      const correct = !skipped && isCorrect(question, selected);

      results.total += 1;
      chapter.total += 1;

      if (skipped) {
        results.skipped += 1;
        chapter.skipped += 1;
      } else if (correct) {
        results.correct += 1;
        chapter.correct += 1;
      } else {
        results.incorrect += 1;
        chapter.incorrect += 1;
      }

      if (!correct) {
        results.missed.push({ question, selected, skipped });
      }

      results.byChapter.set(chapterKey, chapter);
      return results;
    },
    {
      total: 0,
      correct: 0,
      incorrect: 0,
      skipped: 0,
      missed: [],
      byChapter: new Map(),
    },
  );
}

function renderDashboard({ saveAnswer = true } = {}) {
  if (saveAnswer) {
    saveCurrentAnswer();
  }

  state.completed = true;
  setJumpOpen(false);
  const results = getResults();
  const score = results.total === 0 ? 0 : Math.round((results.correct / results.total) * 100);
  saveProgress(buildProgress(true));

  elements.quizView.hidden = true;
  elements.dashboardView.hidden = false;
  elements.jumpDock.hidden = true;
  elements.stats.innerHTML = "";
  elements.chapterSummary.innerHTML = "";
  elements.missedList.innerHTML = "";

  const stats = [
    ["Score", `${score}%`],
    ["Correct", results.correct],
    ["Incorrect", results.incorrect],
    ["Skipped", results.skipped],
  ];

  for (const [label, value] of stats) {
    const stat = document.createElement("div");
    const statValue = document.createElement("span");
    const statLabel = document.createElement("span");

    stat.className = "stat";
    statValue.className = "stat-value";
    statValue.textContent = String(value);
    statLabel.className = "stat-label";
    statLabel.textContent = label;
    stat.append(statValue, statLabel);
    elements.stats.append(stat);
  }

  for (const chapter of results.byChapter.values()) {
    const row = document.createElement("div");
    const title = document.createElement("span");
    const scoreText = document.createElement("span");
    const percent = Math.round((chapter.correct / chapter.total) * 100);

    row.className = "chapter-row";
    title.textContent = chapter.title;
    scoreText.className = "chapter-score";
    scoreText.textContent = `${chapter.correct}/${chapter.total} correct (${percent}%)`;
    row.append(title, scoreText);
    elements.chapterSummary.append(row);
  }

  if (results.missed.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No missed or skipped questions.";
    elements.missedList.append(empty);
    return;
  }

  for (const item of results.missed) {
    const card = document.createElement("div");
    const title = document.createElement("strong");
    const prompt = document.createElement("p");
    const selected = document.createElement("p");
    const correct = document.createElement("p");

    card.className = "missed-item";
    title.textContent = `${item.question.chapterTitle}, question ${item.question.sourceNumber}`;
    prompt.textContent = item.question.prompt.split("\n")[0];
    selected.textContent = `Your answer: ${item.skipped ? "Skipped" : formatLetters(item.selected)}`;
    correct.textContent = `Correct answer: ${formatLetters(item.question.correct)}`;
    card.append(title, prompt, selected, correct);
    elements.missedList.append(card);
  }
}

elements.previousButton.addEventListener("click", () => {
  saveCurrentAnswer();
  state.index = Math.max(0, state.index - 1);
  state.completed = false;
  renderQuestion();
  persistProgress();
});

elements.checkButton.addEventListener("click", () => {
  if (isAnswerLocked()) {
    return;
  }

  saveCurrentAnswer();
  state.checked[state.index] = true;
  state.completed = false;
  renderQuestion();
  persistProgress();
});

elements.nextButton.addEventListener("click", () => {
  saveCurrentAnswer();
  if (state.index === questions.length - 1) {
    renderDashboard();
    return;
  }
  state.index += 1;
  state.completed = false;
  renderQuestion();
  persistProgress();
});

elements.restartButton.addEventListener("click", () => {
  state.index = 0;
  state.answers = questions.map(() => []);
  state.checked = questions.map(() => false);
  state.marked = questions.map(() => false);
  state.eliminated = questions.map(() => []);
  state.completed = false;
  setJumpOpen(false);
  clearProgress();
  renderQuestion();
});

elements.markButton.addEventListener("click", () => {
  state.marked[state.index] = !state.marked[state.index];
  renderMarkState();
  updateJumpMenu();
  persistProgress();
});

elements.uiModeToggle.addEventListener("click", () => {
  if (!elements.quizView.hidden) {
    saveCurrentAnswer();
    persistProgress();
  }

  setUiMode(state.uiMode === "bluebook" ? "classic" : "bluebook");
});

elements.jumpToggle.addEventListener("click", () => {
  saveCurrentAnswer();
  setJumpOpen(!state.jumpOpen);
  updateJumpMenu();
  persistProgress();
});

elements.jumpBackdrop.addEventListener("click", () => {
  setJumpOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.jumpOpen) {
    setJumpOpen(false);
  }
});

setUiMode("classic");
buildJumpMenu();
const savedProgress = loadProgress();

if (savedProgress) {
  applyProgress(savedProgress);
}

if (state.completed) {
  renderDashboard({ saveAnswer: false });
} else {
  renderQuestion();
}
