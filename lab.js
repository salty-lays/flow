/* ── JS Function Lab · lab.js ── */

const challenges = [
{
  id: '01',
  op: '+',
  title: 'Sum two numbers',
  desc: 'Write a function that takes <code>2 parameters</code> and returns their <code>sum</code>.',
  hint: 'Name it anything you like — e.g. <code>add(a, b)</code>',
  validate(fn) {
    if (fn(2, 3) !== 5) return 'Expected add(2,3) → 5';
    if (fn(-1, 1) !== 0) return 'Expected add(-1,1) → 0';
    if (fn(0, 0) !== 0) return 'Expected add(0,0) → 0';
    if (fn(10, 90) !== 100) return 'Expected add(10,90) → 100';
    return null;
  }
},
{
  id: '02',
  op: '−',
  title: 'Subtract two numbers',
  desc: 'Write a function that takes <code>2 parameters</code> and returns the <code>difference</code> (a − b).',
  hint: 'e.g. <code>subtract(a, b)</code>',
  validate(fn) {
    if (fn(10, 3) !== 7) return 'Expected subtract(10,3) → 7';
    if (fn(0, 5) !== -5) return 'Expected subtract(0,5) → -5';
    if (fn(-2, -2) !== 0) return 'Expected subtract(-2,-2) → 0';
    return null;
  }
},
{
  id: '03',
  op: '×',
  title: 'Multiply two numbers',
  desc: 'Write a function that takes <code>2 parameters</code> and returns their <code>product</code>.',
  hint: 'e.g. <code>multiply(a, b)</code>',
  validate(fn) {
    if (fn(3, 4) !== 12) return 'Expected multiply(3,4) → 12';
    if (fn(-2, 5) !== -10) return 'Expected multiply(-2,5) → -10';
    if (fn(0, 99) !== 0) return 'Expected multiply(0,99) → 0';
    return null;
  }
},
{
  id: '04',
  op: '÷',
  title: 'Divide two numbers',
  desc: 'Write a function that takes <code>2 parameters</code> and returns the <code>quotient</code> (a / b). Handle division by zero by returning <code>"Error: divide by zero"</code>.',
  hint: 'e.g. <code>divide(a, b)</code>',
  validate(fn) {
    if (fn(10, 2) !== 5) return 'Expected divide(10,2) → 5';
    if (fn(9, 3) !== 3) return 'Expected divide(9,3) → 3';
    if (fn(7, 0) !== 'Error: divide by zero') return 'Expected divide(7,0) → "Error: divide by zero"';
    return null;
  }
}];

/* ── State ── */
let current = 0;
let userCode = '';
let validatedFunction = null;
let validatedFunctionName = '';
let challengeSolved = false;

/* ── Elements ── */
const challengePanel = document.getElementById('challengePanel');
const testPanel = document.getElementById('testPanel');
const completePanel = document.getElementById('completePanel');

const challengeTag = document.getElementById('challengeTag');
const opBadge = document.getElementById('opBadge');
const challengeTitle = document.getElementById('challengeTitle');
const challengeDesc = document.getElementById('challengeDesc');
const codeInput = document.getElementById('codeInput');
const feedback = document.getElementById('feedback');
const runBtn = document.getElementById('runBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

const testFnName = document.getElementById('testFnName'); /* user writes full call here */
const testBtn = document.getElementById('testBtn');
const resultBox = document.getElementById('resultBox');
const resultLabel = document.getElementById('resultLabel');
const resultValue = document.getElementById('resultValue');
const nextBtn = document.getElementById('nextBtn');

const restartBtn = document.getElementById('restartBtn');

/* OPTIONAL: remove old args input from UI if it exists */
const oldArgsField = document.getElementById('testArgs');
if (oldArgsField) {
  oldArgsField.style.display = 'none';
}

/* ── Load challenge ── */
function loadChallenge(idx) {
  const ch = challenges[idx];

  challengeTag.textContent = `CHALLENGE ${ch.id}`;
  opBadge.textContent = ch.op;
  challengeTitle.textContent = ch.title;
  challengeDesc.innerHTML =
    ch.desc + `<br/><br/><em style="font-size:0.85rem">${ch.hint}</em>`;

  codeInput.value = '';
  feedback.textContent = '';
  feedback.className = 'feedback';

  userCode = '';
  validatedFunction = null;
  validatedFunctionName = '';
  challengeSolved = false;

  testFnName.value = '';
  testFnName.placeholder = 'Example: add(1,2)';
  resultBox.style.display = 'none';

  nextBtn.disabled = true;

  updateProgress(idx);

  show(challengePanel);
  hide(testPanel);
  hide(completePanel);
}

/* ── Progress ── */
function updateProgress(idx) {
  const pct = ((idx + 1) / challenges.length) * 100;
  progressFill.style.width = pct + '%';
  progressText.textContent = `${idx + 1} / ${challenges.length}`;
}

/* ── Run & validate ── */
runBtn.addEventListener('click', () => {
  feedback.className = 'feedback';
  feedback.textContent = '';

  validatedFunction = null;
  validatedFunctionName = '';
  challengeSolved = false;
  nextBtn.disabled = true;

  const code = codeInput.value.trim();

  if (!code) {
    setFeedback('error', '✗ Nothing to run. Write your function first.');
    return;
  }

  let fn;

  try {
    const match = code.match(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/);
    const arrowMatch = code.match(
      /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/
    );

    const name = (match && match[1]) || (arrowMatch && arrowMatch[1]);

    if (!name) {
      setFeedback(
        'error',
        '✗ No named function found. Use: function myFn(a, b) { ... }'
      );
      return;
    }

    const wrapper = new Function(`
      "use strict";
      ${code}
      return (typeof ${name} !== "undefined") ? ${name} : null;
    `);

    fn = wrapper();

    if (typeof fn !== 'function') {
      setFeedback('error', `✗ "${name}" is not a function.`);
      return;
    }

    validatedFunctionName = name;

  } catch (e) {
    setFeedback('error', `✗ Syntax error: ${e.message}`);
    return;
  }

  const error = challenges[current].validate(fn);

  if (error) {
    setFeedback('error', `✗ Test failed — ${error}`);
    return;
  }

  userCode = code;
  validatedFunction = fn;

  setFeedback(
    'success',
    `✓ Core tests passed! Now manually call your function (example: ${validatedFunctionName}(1,2)) to unlock next challenge.`
  );

  setTimeout(() => {
    show(testPanel);
    hide(challengePanel);

    testFnName.value = '';
    testFnName.placeholder = `${validatedFunctionName}(1,2)`;
    resultBox.style.display = 'none';
  }, 700);
});

/* ── Manual Function Call Execution ── */
testBtn.addEventListener('click', () => {
  const call = testFnName.value.trim();

  if (!call) {
    challengeSolved = false;
    nextBtn.disabled = true;
    showResult('ERROR', 'Enter a full function call like add(1,2)', true);
    return;
  }

  if (!validatedFunction) {
    challengeSolved = false;
    nextBtn.disabled = true;
    showResult('ERROR', 'Run and validate your code first.', true);
    return;
  }

  try {
    /* Must start with correct function */
    if (!call.startsWith(validatedFunctionName + '(')) {
      throw new Error(
        `Use the correct function name: ${validatedFunctionName}(...)`
      );
    }

    /* Execute only validated code + user call */
    const executor = new Function(`
      "use strict";
      ${userCode}
      return ${call};
    `);

    const result = executor();

    showResult('RESULT', String(result), false);

    challengeSolved = true;
    nextBtn.disabled = false;

  } catch (e) {
    challengeSolved = false;
    nextBtn.disabled = true;
    showResult('ERROR', e.message, true);
  }
});

function showResult(label, value, isError) {
  resultBox.style.display = 'flex';
  resultLabel.textContent = label;
  resultValue.textContent = value;
  resultValue.className = isError
    ? 'result-value error'
    : 'result-value';
}

/* ── Next challenge ── */
nextBtn.addEventListener('click', () => {
  if (!challengeSolved) {
    showResult(
      'ERROR',
      'You must manually test your function correctly before unlocking the next challenge.',
      true
    );
    return;
  }

  current++;

  if (current >= challenges.length) {
    show(completePanel);
    hide(testPanel);
    hide(challengePanel);

    progressFill.style.width = '100%';
    progressText.textContent = '✓ Done';

  } else {
    loadChallenge(current);
  }
});

/* ── Restart ── */
restartBtn.addEventListener('click', () => {
  current = 0;
  loadChallenge(0);
});

/* ── Helpers ── */
function show(el) {
  el.style.display = 'block';
}

function hide(el) {
  el.style.display = 'none';
}

function setFeedback(type, msg) {
  feedback.className = `feedback ${type}`;
  feedback.textContent = msg;
}

/* ── Tab key in editor ── */
codeInput.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    e.preventDefault();

    const s = codeInput.selectionStart;

    codeInput.value =
      codeInput.value.slice(0, s) +
      '  ' +
      codeInput.value.slice(codeInput.selectionEnd);

    codeInput.selectionStart = codeInput.selectionEnd = s + 2;
  }
});

/* ── Init ── */
loadChallenge(0);