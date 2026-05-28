import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceDir = path.join(root, "DrLiang'sMCQs", "selftest9e");
const outputFile = path.join(root, "src", "questions.js");
const chapters = [9, 12, 13, 16, 17];

function readSource(fileName) {
  return fs.readFileSync(path.join(sourceDir, fileName), "utf8").replace(/\r\n/g, "\n");
}

function decodeEntities(value) {
  return value
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function parseAnswers(answerText) {
  const answers = [];
  let section = "";

  for (const line of answerText.split("\n")) {
    const trimmed = decodeEntities(line.trim());
    if (trimmed.startsWith("Section ")) {
      section = trimmed;
      continue;
    }

    const match = trimmed.match(/^(\d+)\.\s*([a-eA-E]+)\b/);
    if (!match) {
      continue;
    }

    answers.push({
      sourceNumber: Number(match[1]),
      correct: [...match[2].toLowerCase()],
      section,
    });
  }

  return answers;
}

function findQuestionStart(questionText, sourceNumber, fromIndex) {
  const pattern = new RegExp(`^${sourceNumber}\\.\\s*`, "gm");
  pattern.lastIndex = fromIndex;
  const match = pattern.exec(questionText);
  if (!match) {
    throw new Error(`Could not find question ${sourceNumber} after index ${fromIndex}`);
  }
  return match.index;
}

function parseQuestionBlock(block) {
  const withoutNumber = decodeEntities(block.replace(/^\d+\.\s*/, "")).trim();
  const lines = withoutNumber.split("\n");
  const optionStart = lines.findIndex((line) => /^[a-e]\.\s*/i.test(line.trimStart()));

  if (optionStart === -1) {
    throw new Error(`Could not find answer choices in block:\n${block.slice(0, 300)}`);
  }

  const prompt = lines.slice(0, optionStart).join("\n").trim();
  const options = [];

  for (const rawLine of lines.slice(optionStart)) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (trimmed.startsWith("Section ") || trimmed.startsWith("#")) {
      break;
    }

    const match = line.match(/^\s*([a-e])\.\s*(.*)$/i);

    if (match) {
      options.push({
        letter: match[1].toLowerCase(),
        text: match[2].trim(),
      });
      continue;
    }

    if (options.length > 0) {
      options[options.length - 1].text = `${options[options.length - 1].text}\n${line}`.trim();
    }
  }

  return { prompt, options };
}

const questions = [];

for (const chapter of chapters) {
  const questionText = readSource(`chapter${chapter}.txt`);
  const answerText = readSource(`chapter${chapter}-ans.txt`);
  const title = decodeEntities(questionText.split("\n").find((line) => line.trim())?.trim() ?? `Chapter ${chapter}`);
  const answers = parseAnswers(answerText);

  const starts = [];
  let cursor = 0;
  for (const answer of answers) {
    const start = findQuestionStart(questionText, answer.sourceNumber, cursor);
    starts.push(start);
    cursor = start + 1;
  }

  answers.forEach((answer, index) => {
    const start = starts[index];
    const end = starts[index + 1] ?? questionText.length;
    const { prompt, options } = parseQuestionBlock(questionText.slice(start, end));
    const optionLetters = new Set(options.map((option) => option.letter));

    for (const letter of answer.correct) {
      if (!optionLetters.has(letter)) {
        throw new Error(`Chapter ${chapter} question ${answer.sourceNumber} has answer ${letter}, but no matching option.`);
      }
    }

    questions.push({
      id: `ch${chapter}-${String(index + 1).padStart(2, "0")}`,
      chapter,
      chapterTitle: title,
      section: answer.section,
      sourceNumber: answer.sourceNumber,
      prompt,
      options,
      correct: answer.correct,
    });
  });
}

const output = `export const questions = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(outputFile, output);

console.log(`Generated ${questions.length} questions in ${path.relative(root, outputFile)}`);
