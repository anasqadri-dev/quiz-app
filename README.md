# Quiz App

> A vanilla JavaScript quiz app — question bank driven by a data array, immediate answer feedback with color coding, score tracking, and full restart without a page reload.

## Demo

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Warm rose card design, answer feedback states |
| JavaScript (ES6) | Quiz logic, DOM manipulation, state management |

---

## Features

- 5 questions rendered from a JavaScript data array
- 4 answer options per question as dynamically created buttons
- Immediate visual feedback — correct answer turns green, wrong turns red
- Correct answer always highlighted when a wrong one is selected
- All buttons disabled after answering — no re-selection
- Next button appears only after an answer is selected
- Score display at the end
- Full restart without refreshing the page
- Responsive design for mobile and desktop

---

## Project Structure

```
quiz-app/
├── index.html     # Minimal shell — all content is rendered by JS
├── style.css      # Card design, answer button states, feedback colors
└── script.js      # Quiz logic, state, DOM rendering, event handling
```

---

## How It Works

1. `startQuiz()` resets score and index, then calls `showQuestion()`
2. `showQuestion()` reads the current question from the array and creates one `<button>` per option
3. The correct answer is marked with `button.dataset.correct = true` — stored on the DOM element itself
4. When an answer is clicked, `selectAnswer()` reads `dataset.correct`, updates the score, applies CSS classes, and disables all buttons
5. The Next button appears; clicking it increments `currentQuestionIndex` and calls `showQuestion()` again
6. After the last question, `showScore()` renders the final score and changes Next to Restart

---

## State

Two plain JavaScript variables manage the entire quiz:

```javascript
let currentQuestionIndex = 0;  // which question is active
let score = 0;                 // how many correct answers so far
```

Both reset in `startQuiz()` for a clean restart.

---

## Question Data Format

```javascript
{
  question: "Which data structure works on the LIFO principle?",
  options: ["Queue", "Stack", "Array", "Linked List"],
  answer: "Stack"
}
```

To extend the quiz, add objects to the `questions` array. No other code changes needed.

---

## What I Learned

- `data-*` attributes store information on DOM elements without extra JavaScript variables — `button.dataset.correct = true` marks which button is the right answer, readable later by any event handler
- `NodeList` is not an array — `answerButtons.children` returns a `HTMLCollection`, not an array. `Array.from()` converts it so `.forEach()` works
- `innerHTML` vs `innerText` are not the same — `innerHTML` parses HTML tags, `innerText` treats everything as plain text. Using the wrong one causes XSS vulnerabilities if the content ever comes from user input
- `resetState()` is what makes stateful rendering clean — clearing the previous question's DOM before drawing the new one prevents duplicate content and stale event listeners

---

## License

MIT