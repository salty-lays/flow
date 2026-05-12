// =============================
// lab-class.js
// =============================

function switchTab(el, targetId) {
  const allTabs = el.parentElement.querySelectorAll('.file-tab');
  const section = el.closest('.lab-section') || document;
  const allContents = section.querySelectorAll('.tab-content');

  allTabs.forEach(tab => tab.classList.remove('active'));
  allContents.forEach(content => content.classList.remove('active'));

  el.classList.add('active');

  const target = document.getElementById(targetId);
  if (target) target.classList.add('active');
}

// STEP TRACKER
function setStep(stepNumber) {
  [1, 2, 3].forEach(num => {
    const step = document.getElementById("step" + num);

    step.classList.remove("active", "done");

    if (num < stepNumber) {
      step.classList.add("done");
    } else if (num === stepNumber) {
      step.classList.add("active");
    }
  });
}

// Step Progression
document.getElementById("codeInput").addEventListener("input", () => {
  setStep(2);
});

["nameAdd", "nameSub", "nameMul", "nameDiv"].forEach(id => {
  document.getElementById(id).addEventListener("input", () => {
    setStep(3);
  });
});

// CLEAR CONSOLE
function clearConsole() {
  document.getElementById("consoleBody").innerHTML = "";
  document.getElementById("consoleBox").style.display = "none";
  document.getElementById("resultGrid").innerHTML = "";
  document.getElementById("successBanner").classList.remove("show");
}

// LOGGING
function log(message, type = "info") {
  const consoleBox = document.getElementById("consoleBox");
  consoleBox.style.display = "block";

  const body = document.getElementById("consoleBody");

  const line = document.createElement("div");
  line.className = "log-line";

  line.innerHTML = `
    <span class="log-prefix">›</span>
    <span class="log-${type}">${message}</span>
  `;

  body.appendChild(line);
  body.scrollTop = body.scrollHeight;
}

// RESULT CARDS
function addResult(label, expression, got, expected, pass) {
  const grid = document.getElementById("resultGrid");

  const card = document.createElement("div");
  card.className = `result-card ${pass ? "pass" : "fail"}`;

  card.innerHTML = `
    <div class="rc-label">${label}</div>
    <div class="rc-expr">${expression}</div>
    <div class="rc-got">→ ${got}</div>
    <div class="rc-status">
      ${pass ? "✓ PASS" : "✗ FAIL — expected " + expected}
    </div>
  `;

  grid.appendChild(card);
}

// RUN TESTS
function runTests() {
  clearConsole();
  setStep(3);

  const code = document.getElementById("codeInput").value.trim();

  const nameAdd = document.getElementById("nameAdd").value.trim();
  const nameSub = document.getElementById("nameSub").value.trim();
  const nameMul = document.getElementById("nameMul").value.trim();
  const nameDiv = document.getElementById("nameDiv").value.trim();

  const a = parseFloat(document.getElementById("valA").value);
  const b = parseFloat(document.getElementById("valB").value);

  // VALIDATION
  if (!code) {
    log("No code found. Please write your MathOps class first.", "err");
    return;
  }

  if (!nameAdd || !nameSub || !nameMul || !nameDiv) {
    log("Please fill in all four method names first.", "err");
    return;
  }

  log("Checking your class code...", "info");

  let MathOps;

  try {
    const createClass = new Function(code + "\n return MathOps;");
    MathOps = createClass();
  } catch (error) {
    log(`Syntax Error: ${error.message}`, "err");
    return;
  }

  log("Class created successfully ✓", "ok");
  log(`Creating object: new MathOps(${a}, ${b})`, "info");

  let instance;

  try {
    instance = new MathOps(a, b);
  } catch (error) {
    log(`Constructor Error: ${error.message}`, "err");
    return;
  }

  log("Object created successfully ✓", "ok");

  const tests = [
    {
      label: "Addition",
      method: nameAdd,
      symbol: "+",
      expected: a + b
    },
    {
      label: "Subtraction",
      method: nameSub,
      symbol: "-",
      expected: a - b
    },
    {
      label: "Multiplication",
      method: nameMul,
      symbol: "×",
      expected: a * b
    },
    {
      label: "Division",
      method: nameDiv,
      symbol: "÷",
      expected: b !== 0 ? a / b : null
    }
  ];

  let passedCount = 0;

  tests.forEach(test => {
    if (typeof instance[test.method] !== "function") {
      log(`"${test.method}" method not found`, "err");

      addResult(
        test.label,
        `instance.${test.method}()`,
        "Method Missing",
        test.expected,
        false
      );

      return;
    }

    let result;

    try {
      result = instance[test.method]();
    } catch (error) {
      log(`${test.method}() Error: ${error.message}`, "err");
      return;
    }

    const pass =
      (test.symbol === "÷" && b === 0)
        ? true
        : Math.abs(result - test.expected) < 0.0001;

    if (pass) passedCount++;

    log(
      `${pass ? "✓" : "✗"} ${test.label}: ${result}`,
      pass ? "ok" : "err"
    );

    addResult(
      test.label,
      `instance.${test.method}() → ${a} ${test.symbol} ${b}`,
      result,
      test.expected,
      pass
    );
  });

  log("─────────────────────────────", "info");
  log(`${passedCount}/4 tests passed`, passedCount === 4 ? "ok" : "err");

  if (passedCount === 4) {
    document.getElementById("successBanner").classList.add("show");
  }
}

// RESET
function resetLab() {
  document.getElementById("codeInput").value = "";

  ["nameAdd", "nameSub", "nameMul", "nameDiv"].forEach(id => {
    document.getElementById(id).value = "";
  });

  document.getElementById("valA").value = 10;
  document.getElementById("valB").value = 5;

  clearConsole();
  setStep(1);
}

// LOAD EXAMPLE
function loadExample() {
  document.getElementById("codeInput").value =
`class MathOps {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    if (this.b === 0) return "Cannot divide by zero";
    return this.a / this.b;
  }
}`;

  document.getElementById("nameAdd").value = "add";
  document.getElementById("nameSub").value = "subtract";
  document.getElementById("nameMul").value = "multiply";
  document.getElementById("nameDiv").value = "divide";

  setStep(3);
  clearConsole();
}

// TAB SUPPORT INSIDE TEXTAREA
document.getElementById("codeInput").addEventListener("keydown", e => {
  if (e.key === "Tab") {
    e.preventDefault();

    const start = e.target.selectionStart;
    const value = e.target.value;

    e.target.value =
      value.substring(0, start) +
      "  " +
      value.substring(e.target.selectionEnd);

    e.target.selectionStart = e.target.selectionEnd = start + 2;
  }
});