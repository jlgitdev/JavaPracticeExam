# MVHS Java Practice Final Exam

A lightweight Java final exam practice website built in about 10 minutes for my school's Java class. It was used by 60+ students to prepare for the final.

## Overview

The site turns Java multiple-choice review questions into a simple browser-based practice exam. Students can move through questions, check answers, mark questions for review, cross out choices, jump between questions, and see a results summary at the end.

## Question Source

The quiz questions come from the bundled `DrLiang'sMCQs/` folder, specifically the chapter files under `DrLiang'sMCQs/selftest9e/`.

## Features

- 199 Java practice questions from selected chapters
- Single-answer and select-all-that-apply questions
- Immediate answer checking
- Question navigation and review marking
- Choice elimination
- Classic and Bluebook-style UI modes
- Final score, chapter breakdown, and missed/skipped question review

## Run Locally

This is a static site with no install step.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How It Works

- `index.html` defines the quiz layout.
- `styles.css` handles the responsive exam UI.
- `src/app.js` manages quiz state, navigation, answer checking, review marking, and results.
- `src/questions.js` contains the generated question data used by the app.
- `scripts/build-questions.mjs` rebuilds `src/questions.js` from the source chapter files in `DrLiang'sMCQs/selftest9e`.

To regenerate the question data:

```bash
node scripts/build-questions.mjs
```

## Project Structure

```text
.
|-- index.html
|-- styles.css
|-- src/
|   |-- app.js
|   `-- questions.js
|-- scripts/
|   `-- build-questions.mjs
`-- DrLiang'sMCQs/
    `-- selftest9e/
```
