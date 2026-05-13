// ============================================================
//  DATA TYPES LAB — lab.js
//  Covers: Integer, Float, String, Boolean, List/Array,
//          Dictionary/Object, Tuple, Set, NoneType/Null
// ============================================================

const TYPES = [
  {
    id: "integer",
    name: "Integer",
    chip: "int",
    color: "#f0e040",
    desc: "Integers are whole numbers — no decimal point. They can be positive, negative, or zero. Almost every program uses integers for counting, indexing, and arithmetic.",
    facts: [
      "Whole numbers only — no fractions or decimals",
      "Can be positive, negative, or zero",
      "In Python, integers have unlimited size",
      "Common operations: +, -, *, /, //, %, **",
      "Used for loop counters, indexes, scores, ages"
    ],
    example: `# Python integers
age = 25
score = -10
big = 1_000_000   # underscores for readability

print(type(age))  # <class 'int'>
print(10 // 3)    # 3  (floor division)
print(2 ** 8)     # 256`,
    task: "Create a variable called `temperature` set to -5. Then print its type and print the result of multiplying it by 3.",
    hint: "Use `temperature = -5`, then `print(type(temperature))` and `print(temperature * 3)`.",
    check: {
      keywords: ["temperature", "-5", "type", "*3", "* 3", "multiply", "-15", "print"],
      requiredPrint: true,
      description: "should create temperature = -5, print its type, and print temperature * 3"
    }
  },
  {
    id: "float",
    name: "Float",
    chip: "float",
    color: "#f09040",
    desc: "Floats represent real numbers with a decimal point. They're used whenever precision beyond whole numbers is needed — prices, temperatures, measurements, scientific values.",
    facts: [
      "Contains a decimal point (e.g. 3.14, -0.5, 2.0)",
      "Stored in IEEE 754 double-precision format",
      "Can cause tiny rounding errors (0.1 + 0.2 ≠ 0.3 exactly)",
      "Convert int to float: float(5) → 5.0",
      "Special values: float('inf'), float('nan')"
    ],
    example: `pi = 3.14159
price = 9.99
temp = -273.15

print(type(pi))       # <class 'float'>
print(round(pi, 2))   # 3.14
print(0.1 + 0.2)      # 0.30000000000000004 (!)`,
    task: "Create a variable `height` set to 5.9. Create another called `weight` set to 72.5. Print both their product rounded to 2 decimal places.",
    hint: "Use `round(height * weight, 2)` inside print.",
    check: {
      keywords: ["height", "5.9", "weight", "72.5", "round", "print", "*"],
      requiredPrint: true,
      description: "should create height=5.9 and weight=72.5, print their product rounded to 2 decimal places"
    }
  },
  {
    id: "string",
    name: "String",
    chip: "str",
    color: "#40f090",
    desc: "Strings are sequences of characters — text. They're one of the most used data types: names, messages, file paths, JSON, HTML — it's all strings underneath.",
    facts: [
      "Enclosed in single ' ', double \" \", or triple ''' ''' quotes",
      "Immutable — you can't change a character in place",
      "Supports indexing: s[0] gets the first character",
      "Many built-in methods: .upper(), .split(), .replace(), .strip()",
      "f-strings allow embedding expressions: f'Hello {name}'"
    ],
    example: `name = "Ada Lovelace"
msg = 'Hello, World!'

print(name.upper())        # ADA LOVELACE
print(name[0:3])           # Ada
print(f"Hi, {name}!")      # Hi, Ada Lovelace!
print(len(msg))            # 13`,
    task: "Create a string `sentence` = 'the quick brown fox'. Print it in UPPERCASE, print its length, and print just the first word using slicing or split.",
    hint: "Use `.upper()`, `len()`, and either `sentence.split()[0]` or slicing `sentence[0:3]`.",
    check: {
      keywords: ["sentence", "the quick brown fox", "upper", "len", "print", "split"],
      requiredPrint: true,
      description: "should create the sentence, print it uppercase, print its length, and print the first word"
    }
  },
  {
    id: "boolean",
    name: "Boolean",
    chip: "bool",
    color: "#f04090",
    desc: "Booleans have only two possible values: True or False. They're the backbone of all decisions in code — every `if` statement, every loop condition, every comparison returns a boolean.",
    facts: [
      "Only two values: True and False (capital T and F in Python)",
      "Result of comparisons: 5 > 3 → True",
      "Operators: and, or, not",
      "Truthy/falsy: 0, '', [], None are falsy; everything else truthy",
      "bool(0) → False, bool(1) → True"
    ],
    example: `is_logged_in = True
has_permission = False

print(is_logged_in and has_permission)  # False
print(is_logged_in or has_permission)   # True
print(not is_logged_in)                 # False
print(10 > 5)                           # True`,
    task: "Create two booleans: `is_raining = True` and `has_umbrella = False`. Print: is_raining AND has_umbrella, is_raining OR has_umbrella, and NOT is_raining.",
    hint: "Use Python's `and`, `or`, `not` operators directly in print statements.",
    check: {
      keywords: ["is_raining", "has_umbrella", "True", "False", "and", "or", "not", "print"],
      requiredPrint: true,
      description: "should define both booleans and print all three logical operations"
    }
  },
  {
    id: "list",
    name: "List / Array",
    chip: "list",
    color: "#40e0f0",
    desc: "Lists store multiple items in a single variable, in order. They're mutable — you can add, remove, or change items. They're one of the most powerful and flexible data structures.",
    facts: [
      "Created with square brackets: [1, 2, 3]",
      "Ordered — items maintain their position",
      "Mutable — can be changed after creation",
      "Can hold mixed types: [1, 'hello', True, 3.14]",
      "Key methods: .append(), .remove(), .pop(), .sort()"
    ],
    example: `fruits = ["apple", "banana", "cherry"]

print(fruits[0])        # apple
print(fruits[-1])       # cherry
fruits.append("mango")
print(len(fruits))      # 4
fruits.sort()
print(fruits)           # ['apple', 'banana', 'cherry', 'mango']`,
    task: "Create a list `numbers` = [5, 3, 8, 1, 9, 2]. Append the number 7 to it. Sort the list. Print the sorted list and print the last element.",
    hint: "Use `.append(7)`, then `.sort()`, then print `numbers` and `numbers[-1]`.",
    check: {
      keywords: ["numbers", "[5", "append", "sort", "print", "numbers[-1]", "numbers[5]"],
      requiredPrint: true,
      description: "should create the list, append 7, sort it, print the list and the last element"
    }
  },
  {
    id: "dictionary",
    name: "Dictionary",
    chip: "dict",
    color: "#9040f0",
    desc: "Dictionaries store key-value pairs. Instead of numbered indexes, you look things up by a meaningful key. Think of a real dictionary: word → definition. Dicts are everywhere in APIs, configs, and data processing.",
    facts: [
      "Created with curly braces: {'key': value}",
      "Keys must be unique and immutable (strings, numbers, tuples)",
      "Values can be anything, including other dicts",
      "Access with d['key'] or d.get('key')",
      "Methods: .keys(), .values(), .items(), .update()"
    ],
    example: `person = {
    "name": "Alice",
    "age": 30,
    "city": "Paris"
}

print(person["name"])         # Alice
print(person.get("age"))      # 30
person["email"] = "a@b.com"   # add new key
print(person.keys())`,
    task: "Create a dictionary `car` with keys: 'brand' = 'Toyota', 'model' = 'Corolla', 'year' = 2022. Print the brand. Add a key 'color' = 'red'. Print all the keys.",
    hint: "Use `car['brand']` to print brand, `car['color'] = 'red'` to add, and `car.keys()` to print keys.",
    check: {
      keywords: ["car", "brand", "Toyota", "model", "Corolla", "year", "2022", "color", "red", "keys", "print"],
      requiredPrint: true,
      description: "should create the car dict, print brand, add color key, print all keys"
    }
  },
  {
    id: "tuple",
    name: "Tuple",
    chip: "tuple",
    color: "#f0a040",
    desc: "Tuples are like lists — ordered sequences — but immutable. Once created, they can't be changed. Use tuples when data shouldn't change: coordinates, RGB colors, database records, function return values.",
    facts: [
      "Created with parentheses: (1, 2, 3)",
      "Immutable — cannot be modified after creation",
      "Faster than lists for fixed data",
      "Supports unpacking: x, y = (3, 4)",
      "Single-item tuple needs a trailing comma: (5,)"
    ],
    example: `coords = (40.7128, -74.0060)   # NYC lat/lon
rgb = (255, 128, 0)

print(coords[0])    # 40.7128
x, y = coords       # unpacking
print(f"lat={x}, lon={y}")

# rgb[0] = 100  # ❌ TypeError — immutable!`,
    task: "Create a tuple `dimensions` = (1920, 1080). Unpack it into variables `width` and `height`. Print both, and print the total number of pixels (width * height).",
    hint: "Use `width, height = dimensions` for unpacking, then `print(width * height)`.",
    check: {
      keywords: ["dimensions", "1920", "1080", "width", "height", "print", "*"],
      requiredPrint: true,
      description: "should create the tuple, unpack it, print width and height, and print width*height"
    }
  },
  {
    id: "set",
    name: "Set",
    chip: "set",
    color: "#40f0a0",
    desc: "Sets store unique items — duplicates are automatically removed. They're unordered and great for membership testing, deduplication, and mathematical set operations like union and intersection.",
    facts: [
      "Created with curly braces: {1, 2, 3} or set()",
      "Unordered — no guaranteed index or position",
      "No duplicates — adding an existing item does nothing",
      "Very fast membership test: 'x in my_set'",
      "Operations: union (|), intersection (&), difference (-)"
    ],
    example: `tags = {"python", "coding", "python", "data"}
print(tags)          # {'python', 'coding', 'data'} — no duplicate

a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a & b)         # {3, 4}  intersection
print(a | b)         # {1,2,3,4,5,6} union
print(a - b)         # {1, 2}  difference`,
    task: "Create a set `unique_nums` from this list: [1, 2, 2, 3, 3, 3, 4]. Print the set (duplicates removed). Add the number 5. Print its length.",
    hint: "Use `unique_nums = set([1, 2, 2, 3, 3, 3, 4])`, then `.add(5)`, then `len(unique_nums)`.",
    check: {
      keywords: ["unique_nums", "set", "[1, 2", "add", "5", "len", "print"],
      requiredPrint: true,
      description: "should create set from list, add 5, print the set and its length"
    }
  },
  {
    id: "none",
    name: "NoneType / Null",
    chip: "None",
    color: "#a0a0c0",
    desc: "None represents the absence of a value. It's Python's version of null/nil. Functions that don't return anything return None implicitly. It's used to signal 'no data', 'not yet set', or 'not found'.",
    facts: [
      "Only one value: None (capital N)",
      "Type is NoneType: type(None) → <class 'NoneType'>",
      "Check with `is None`, not `== None`",
      "Functions without return return None implicitly",
      "Used as default for optional parameters"
    ],
    example: `result = None

if result is None:
    print("No value yet")   # No value yet

def greet(name=None):
    if name is None:
        return "Hello, stranger!"
    return f"Hello, {name}!"

print(greet())          # Hello, stranger!
print(greet("Sam"))     # Hello, Sam!`,
    task: "Create a variable `user_input` = None. Check if it is None and print 'No input provided'. Then set it to 'hello' and print its type.",
    hint: "Use `if user_input is None: print(...)`, then reassign and use `type(user_input)`.",
    check: {
      keywords: ["user_input", "None", "is None", "No input", "hello", "type", "print"],
      requiredPrint: true,
      description: "should create user_input=None, check with is None, print message, reassign to hello, print type"
    }
  }
];

// ============================================================
//  STATE
// ============================================================
let currentIndex = 0;
let hintShown = false;
let solved = false;

// ============================================================
//  ELEMENTS
// ============================================================
const elProgressFill   = document.getElementById("progressFill");
const elProgressCurrent= document.getElementById("progressCurrent");
const elProgressTotal  = document.getElementById("progressTotal");
const elTypeChip       = document.getElementById("typeChip");
const elTypeName       = document.getElementById("typeName");
const elTypeDesc       = document.getElementById("typeDesc");
const elFactsList      = document.getElementById("factsList");
const elCodeExample    = document.getElementById("codeExample");
const elTaskText       = document.getElementById("taskText");
const elEditorLang     = document.getElementById("editorLang");
const elCodeEditor     = document.getElementById("codeEditor");
const elBtnClear       = document.getElementById("btnClear");
const elBtnRun         = document.getElementById("btnRun");
const elBtnHint        = document.getElementById("btnHint");
const elFeedbackArea   = document.getElementById("feedbackArea");
const elFeedbackIcon   = document.getElementById("feedbackIcon");
const elFeedbackMsg    = document.getElementById("feedbackMsg");
const elFeedbackExplain= document.getElementById("feedbackExplain");
const elHintArea       = document.getElementById("hintArea");
const elHintText       = document.getElementById("hintText");
const elNextRow        = document.getElementById("nextRow");
const elBtnNext        = document.getElementById("btnNext");
const elCompletionScreen=document.getElementById("completionScreen");
const elCompletionTypes= document.getElementById("completionTypes");
const elBtnRestart     = document.getElementById("btnRestart");
const elCheckingOverlay= document.getElementById("checkingOverlay");

// ============================================================
//  INIT
// ============================================================
elProgressTotal.textContent = TYPES.length;

function loadType(index) {
  const t = TYPES[index];
  hintShown = false;
  solved = false;

  // Info panel
  elTypeChip.textContent    = t.chip;
  elTypeChip.style.background = t.color;
  elTypeName.textContent    = t.name;
  elTypeDesc.textContent    = t.desc;
  elFactsList.innerHTML     = t.facts.map(f => `<li>${f}</li>`).join("");
  elCodeExample.textContent = t.example;

  // Task panel
  elTaskText.textContent    = t.task;
  elCodeEditor.value        = "";
  elCodeEditor.placeholder  = `# Write your Python code here for ${t.name}...`;

  // Hide feedback/hint/next
  elFeedbackArea.classList.add("hidden");
  elHintArea.classList.add("hidden");
  elNextRow.classList.add("hidden");
  elBtnRun.disabled = false;

  // Progress
  const pct = ((index) / TYPES.length) * 100;
  elProgressFill.style.width = pct + "%";
  elProgressCurrent.textContent = index + 1;

  // Animate panels
  document.querySelectorAll(".panel").forEach(p => {
    p.style.animation = "none";
    p.offsetHeight;
    p.style.animation = "fadeIn 0.35s ease";
  });
}

loadType(0);

// ============================================================
//  TAB KEY IN EDITOR
// ============================================================
elCodeEditor.addEventListener("keydown", e => {
  if (e.key === "Tab") {
    e.preventDefault();
    const start = elCodeEditor.selectionStart;
    const end   = elCodeEditor.selectionEnd;
    elCodeEditor.value = elCodeEditor.value.substring(0, start) + "    " + elCodeEditor.value.substring(end);
    elCodeEditor.selectionStart = elCodeEditor.selectionEnd = start + 4;
  }
});

// ============================================================
//  CLEAR
// ============================================================
elBtnClear.addEventListener("click", () => {
  elCodeEditor.value = "";
  elFeedbackArea.classList.add("hidden");
  elHintArea.classList.add("hidden");
  elNextRow.classList.add("hidden");
  solved = false;
  elBtnRun.disabled = false;
});

// ============================================================
//  HINT
// ============================================================
elBtnHint.addEventListener("click", () => {
  const t = TYPES[currentIndex];
  elHintText.textContent = t.hint;
  elHintArea.classList.toggle("hidden");
  hintShown = true;
});

// ============================================================
//  RUN & CHECK  (AI-powered)
// ============================================================
elBtnRun.addEventListener("click", async () => {
  const code = elCodeEditor.value.trim();
  if (!code) {
    showFeedback(false, "Nothing to check!", "Write some code first, then click Run & Check.");
    return;
  }

  const t = TYPES[currentIndex];
  elBtnRun.disabled = true;
  elCheckingOverlay.classList.remove("hidden");
  elFeedbackArea.classList.add("hidden");

  try {
    const result = await checkCodeWithAI(code, t);
    elCheckingOverlay.classList.add("hidden");

    if (result.correct) {
      solved = true;
      showFeedback(true, result.message, result.explanation);
      elNextRow.classList.remove("hidden");
      updateProgress();
    } else {
      elBtnRun.disabled = false;
      showFeedback(false, result.message, result.explanation);
    }
  } catch (err) {
    elCheckingOverlay.classList.add("hidden");
    elBtnRun.disabled = false;
    // Fallback to keyword check if AI fails
    const fallback = fallbackCheck(code, t);
    showFeedback(fallback.correct, fallback.message, fallback.explanation);
    if (fallback.correct) {
      solved = true;
      elNextRow.classList.remove("hidden");
      updateProgress();
    }
  }
});

// ============================================================
//  AI CHECK
// ============================================================
async function checkCodeWithAI(code, typeData) {
  const systemPrompt = `You are a Python code checker for a beginner coding lab. 
Your job is to check if student code correctly completes the given task for the "${typeData.name}" data type.

Task: ${typeData.task}

Rules:
- Be lenient with minor style differences (spaces, variable names slightly different, etc.)
- The code doesn't need to be executed — just check if it logically attempts and solves the task
- A good attempt that's mostly right counts as correct
- Check that the key concepts are demonstrated

Respond ONLY with valid JSON, no markdown, no explanation outside JSON:
{
  "correct": true or false,
  "message": "short encouraging or helpful title (max 8 words)",
  "explanation": "1-2 sentences explaining what's right or what needs fixing"
}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: systemPrompt,
      messages: [
        { role: "user", content: `Student code:\n\`\`\`python\n${code}\n\`\`\`` }
      ]
    })
  });

  if (!response.ok) throw new Error("API error " + response.status);

  const data = await response.json();
  const raw = data.content.map(b => b.text || "").join("").trim();
  const clean = raw.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}

// ============================================================
//  FALLBACK KEYWORD CHECK
// ============================================================
function fallbackCheck(code, typeData) {
  const lower = code.toLowerCase();
  const check = typeData.check;
  const matched = check.keywords.filter(kw => lower.includes(kw.toLowerCase()));
  const score = matched.length / check.keywords.length;

  if (score >= 0.5) {
    return {
      correct: true,
      message: "Looks good!",
      explanation: `Your code covers the key parts of the task (${typeData.check.description}).`
    };
  } else {
    return {
      correct: false,
      message: "Not quite there yet",
      explanation: `Your code should ${typeData.check.description}. Check the hint if you're stuck!`
    };
  }
}

// ============================================================
//  SHOW FEEDBACK
// ============================================================
function showFeedback(correct, message, explanation) {
  elFeedbackArea.classList.remove("hidden", "correct", "incorrect");
  elFeedbackArea.classList.add(correct ? "correct" : "incorrect");
  elFeedbackIcon.textContent = correct ? "✅" : "❌";
  elFeedbackMsg.textContent  = message;
  elFeedbackExplain.textContent = explanation;
}

// ============================================================
//  PROGRESS UPDATE
// ============================================================
function updateProgress() {
  const pct = ((currentIndex + 1) / TYPES.length) * 100;
  elProgressFill.style.width = pct + "%";
}

// ============================================================
//  NEXT
// ============================================================
elBtnNext.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= TYPES.length) {
    showCompletion();
  } else {
    loadType(currentIndex);
  }
});

// ============================================================
//  COMPLETION
// ============================================================
function showCompletion() {
  elProgressFill.style.width = "100%";
  elCompletionTypes.innerHTML = TYPES.map(t =>
    `<span class="ct-badge">✓ ${t.name}</span>`
  ).join("");
  elCompletionScreen.classList.remove("hidden");
}

elBtnRestart.addEventListener("click", () => {
  currentIndex = 0;
  elCompletionScreen.classList.add("hidden");
  loadType(0);
});
