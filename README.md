# Calculator Lab

> A functional arithmetic calculator built with Next.js 15 and React 19, covered by a full Cypress end-to-end test suite that validates all four arithmetic operations against the live UI.

---

## What it does

Calculator Lab is a single-page Next.js application that implements a four-operation arithmetic calculator using React's `useState` hook for display state management. The project's emphasis is on **test coverage** — every operation (addition, subtraction, multiplication, division) is verified by Cypress e2e tests that interact with the actual rendered UI, not mocked logic.

---

## Features

- Addition, subtraction, multiplication, and division
- 4×4 button grid rendered from a declarative `buttons` array — adding a new button is a one-line change
- Display initialises to `"0"` and prevents leading zeros by replacing the initial value on first input
- Clear (`C`) resets display to `"0"`; `=` evaluates the expression and catches parse errors gracefully, displaying `"Error"` instead of crashing
- Full Cypress e2e test suite covering all four operations with real button clicks and input assertions

---

## Tech stack

| | |
|---|---|
| Framework | Next.js 15 (Pages Router) |
| UI library | React 19 |
| Testing | Cypress 15 (end-to-end) |
| Linting | ESLint 9 with `eslint-config-next` |
| Build | `next build` → static export ready |

---

## Project structure

```
calculator-lab/
├── components/
│   └── Calculator.js          Single component — display state, button grid, handlers
├── pages/
│   └── index.js               Renders <Calculator /> — no wrapper logic
├── cypress/
│   └── e2e/
│       └── spec.cy.js         4 test cases: addition, subtraction, multiplication, division
├── styles/
│   ├── globals.css            CSS custom properties, dark mode via prefers-color-scheme
│   └── Home.module.css        Module-scoped layout styles (unused in calculator flow)
└── next.config.mjs            reactStrictMode: true
```

---

## How the calculator works

**State:** a single `display` string initialised to `"0"`.

**Input handling (`handleClick`):** if the display is currently `"0"`, the incoming digit or operator *replaces* it — preventing `"07"`. Otherwise it appends.

**Evaluation (`handleEquals`):** passes the accumulated display string to `eval()` inside a `try/catch`. Any invalid expression (e.g. dangling operator) sets the display to `"Error"` without throwing to the UI.

**Button rendering:** the 16 buttons are declared as a flat array and mapped to `<button>` elements. Each button delegates to one of three handlers based on its value (`"C"`, `"="`, or any digit/operator).

---

## Cypress test suite

All four tests follow the same pattern: visit `localhost:3000`, click the operand buttons, click the operator, click `=`, and assert the input value.

```
✓ Addition          5 + 3 = 8
✓ Subtraction       10 − 4 = 6
✓ Multiplication    6 × 7 = 42
✓ Division          15 ÷ 3 = 5
```

Tests use `cy.contains()` to find buttons by their visible label and `cy.get("input").should("have.value", ...)` to assert the result — testing the real DOM, not implementation internals.

---

## Getting started

**Prerequisites:** Node.js 18+

```bash
# Clone
git clone https://github.com/Bhavya-mahyavanshi/calculator-lab.git
cd calculator-lab

# Install
npm install

# Run dev server
npm run dev
# → http://localhost:3000
```

**Run Cypress tests** (dev server must be running on port 3000):

```bash
# Open Cypress UI
npx cypress open

# Or run headless
npx cypress run
```

---

## Author

**Bhavya Mahyavanshi** · Java Full-Stack Developer

[LinkedIn](https://linkedin.com/in/bhavya-mahyavanshi) · [GitHub](https://github.com/Bhavya-mahyavanshi) · [Portfolio](https://bhavya-mahyavanshi.vercel.app)
