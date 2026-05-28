import { questions } from "./questions.js";

const state = {
  index: 0,
  answers: questions.map(() => []),
  checked: questions.map(() => false),
  jumpOpen: false,
};

const elements = {
  quizView: document.querySelector("#quiz-view"),
  dashboardView: document.querySelector("#dashboard-view"),
  chapterLabel: document.querySelector("#chapter-label"),
  sectionLabel: document.querySelector("#section-label"),
  questionCount: document.querySelector("#question-count"),
  questionMode: document.querySelector("#question-mode"),
  progressFill: document.querySelector("#progress-fill"),
  questionText: document.querySelector("#question-text"),
  choices: document.querySelector("#choices"),
  feedback: document.querySelector("#feedback"),
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

function isCorrect(question, selected) {
  const expected = normalizeLetters(question.correct);
  const actual = normalizeLetters(selected);
  return expected.length === actual.length && expected.every((letter, index) => letter === actual[index]);
}

function getSelectedInputs() {
  return [...elements.choices.querySelectorAll("input:checked")].map((input) => input.value);
}

function saveCurrentAnswer() {
  state.answers[state.index] = getSelectedInputs();
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
      setJumpOpen(false);
      renderQuestion();
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
    const correct = checked && answered && isCorrect(questions[index], state.answers[index]);

    button.classList.toggle("current", index === state.index);
    button.classList.toggle("answered", answered && !checked);
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
  elements.jumpToggle.textContent = open ? "Close" : "Questions";
}

function renderQuestion() {
  const question = questions[state.index];
  const selected = new Set(state.answers[state.index]);
  const usesCheckboxes = question.correct.length > 1;
  const progressPercent = ((state.index + 1) / questions.length) * 100;

  elements.quizView.hidden = false;
  elements.dashboardView.hidden = true;
  elements.jumpDock.hidden = false;
  elements.chapterLabel.textContent = question.chapterTitle;
  elements.sectionLabel.textContent = question.section || `Chapter ${question.chapter}`;
  elements.questionCount.textContent = `Question ${state.index + 1} of ${questions.length}`;
  elements.questionMode.textContent = usesCheckboxes ? "Select all that apply" : "Select one";
  elements.progressFill.style.width = `${progressPercent}%`;
  elements.questionText.textContent = `${question.sourceNumber}. ${question.prompt}`;
  elements.choices.innerHTML = "";

  for (const option of question.options) {
    const choice = document.createElement("label");
    choice.className = "choice";
    choice.dataset.letter = option.letter;

    const input = document.createElement("input");
    input.type = usesCheckboxes ? "checkbox" : "radio";
    input.name = "answer";
    input.value = option.letter;
    input.checked = selected.has(option.letter);
    input.addEventListener("change", () => {
      saveCurrentAnswer();
      if (state.checked[state.index]) {
        renderFeedback();
      } else {
        updateJumpMenu();
      }
    });

    const text = document.createElement("span");
    text.className = "choice-text";
    text.textContent = `${option.letter.toUpperCase()}. ${option.text}`;

    choice.append(input, text);
    elements.choices.append(choice);
  }

  elements.previousButton.disabled = state.index === 0;
  elements.nextButton.textContent = state.index === questions.length - 1 ? "Finish" : "Next";

  if (state.checked[state.index]) {
    renderFeedback();
  } else {
    elements.feedback.hidden = true;
    elements.feedback.className = "feedback";
  }

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

function renderDashboard() {
  saveCurrentAnswer();
  setJumpOpen(false);
  const results = getResults();
  const score = results.total === 0 ? 0 : Math.round((results.correct / results.total) * 100);

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
    stat.className = "stat";
    stat.innerHTML = `<span class="stat-value">${value}</span><span class="stat-label">${label}</span>`;
    elements.stats.append(stat);
  }

  for (const chapter of results.byChapter.values()) {
    const row = document.createElement("div");
    const percent = Math.round((chapter.correct / chapter.total) * 100);
    row.className = "chapter-row";
    row.innerHTML = `
      <span>${chapter.title}</span>
      <span class="chapter-score">${chapter.correct}/${chapter.total} correct (${percent}%)</span>
    `;
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
    card.className = "missed-item";
    card.innerHTML = `
      <strong>${item.question.chapterTitle}, question ${item.question.sourceNumber}</strong>
      <p>${escapeHtml(item.question.prompt.split("\n")[0])}</p>
      <p>Your answer: ${item.skipped ? "Skipped" : formatLetters(item.selected)}</p>
      <p>Correct answer: ${formatLetters(item.question.correct)}</p>
    `;
    elements.missedList.append(card);
  }
}

function escapeHtml(value) {
  const span = document.createElement("span");
  span.textContent = value;
  return span.innerHTML;
}

elements.previousButton.addEventListener("click", () => {
  saveCurrentAnswer();
  state.index = Math.max(0, state.index - 1);
  renderQuestion();
});

elements.checkButton.addEventListener("click", () => {
  saveCurrentAnswer();
  state.checked[state.index] = true;
  renderFeedback();
});

elements.nextButton.addEventListener("click", () => {
  saveCurrentAnswer();
  if (state.index === questions.length - 1) {
    renderDashboard();
    return;
  }
  state.index += 1;
  renderQuestion();
});

elements.restartButton.addEventListener("click", () => {
  state.index = 0;
  state.answers = questions.map(() => []);
  state.checked = questions.map(() => false);
  setJumpOpen(false);
  renderQuestion();
});

elements.jumpToggle.addEventListener("click", () => {
  saveCurrentAnswer();
  setJumpOpen(!state.jumpOpen);
  updateJumpMenu();
});

elements.jumpBackdrop.addEventListener("click", () => {
  setJumpOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.jumpOpen) {
    setJumpOpen(false);
  }
});

buildJumpMenu();
renderQuestion();
