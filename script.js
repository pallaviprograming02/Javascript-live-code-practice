
// --- 1. COURSE DATA (The Roadmap) ---
const courseData = [
    {
        phase: "Phase 1: Fundamentals",
        lessons: [
            {
                id: "basics",
                title: "1. Basics of JS",
                content: `
                    <h1>What is JavaScript?</h1>
                    <p>JavaScript is a lightweight, interpreted programming language. It is primarily used for creating interactive and dynamic effects on web pages. Every modern web browser supports JavaScript.</p>
                    
                    <div class="concept-card">
                        <h2>How to add JS to HTML</h2>
                        <p>You can use the <code>&lt;script&gt;</code> tag inside your HTML file.</p>
                    </div>

                    <h2>Your First Command: console.log()</h2>
                    <p>This command prints a message to the browser's developer console. It is essential for debugging.</p>
                    
                    <div class="playground">
                        <div class="playground-header">
                            <span class="playground-title">Live Editor</span>
                            <button class="run-btn" onclick="runCode()">▶ Run Code</button>
                        </div>
                        <div class="editor-container">
                            <textarea class="code-input" id="code-editor">
// Try writing a message
console.log("Hello, World!");
console.log("Welcome to JS Master");</textarea>
                            <div class="output-container" id="output-display">
                                <span class="output-label">Output</span>
                                <div id="output-text"></div>
                            </div>
                        </div>
                    </div>
                `,
                quiz: {
                    question: "Which HTML tag is used to include JavaScript?",
                    options: ["<js>", "<scripting>", "<script>", "<javascript>"],
                    answer: 2
                }
            },
            {
                id: "variables",
                title: "2. Variables & Data",
                content: `
                    <h1>Variables & Data Types</h1>
                    <p>Variables are containers for storing data values.</p>
                    <ul>
                        <li><code>var</code>: Old way (function scoped). Avoid in modern JS.</li>
                        <li><code>let</code>: Modern, can be reassigned (block scoped).</li>
                        <li><code>const</code>: Modern, cannot be reassigned (block scoped).</li>
                    </ul>

                    <h2>Common Data Types</h2>
                    <div class="concept-card">
                        <code>String</code>: Text (e.g., "Hello")<br>
                        <code>Number</code>: Numbers (e.g., 100, 3.14)<br>
                        <code>Boolean</code>: True or False<br>
                        <code>Array</code>: List of items<br>
                        <code>Object</code>: Key-value pairs
                    </div>

                    <div class="playground">
                        <div class="playground-header">
                            <span class="playground-title">Try Variables</span>
                            <button class="run-btn" onclick="runCode()">▶ Run Code</button>
                        </div>
                        <div class="editor-container">
                            <textarea class="code-input" id="code-editor">
let studentName = "Pallavi";
let coursePrice = 0;
let isFree = true;
console.log("Student:", studentName);
console.log("Price:", coursePrice);
console.log("Is Free?:", isFree);</textarea>
                            <div class="output-container" id="output-display">
                                <span class="output-label">Output</span>
                                <div id="output-text"></div>
                            </div>
                        </div>
                    </div>
                `,
                quiz: {
                    question: "Which keyword creates a variable that cannot be changed?",
                    options: ["var", "let", "const", "int"],
                    answer: 2
                }
            },
            {
                id: "operators",
                title: "3. Operators",
                content: `
                    <h1>Operators</h1>
                    <p>Operators are used to perform operations on variables and values.</p>
                    
                    <h2>Arithmetic Operators</h2>
                    <p><code>+</code> (Addition), <code>-</code> (Subtraction), <code>*</code> (Multiplication), <code>/</code> (Division)</p>

                    <h2>Comparison Operators</h2>
                    <p><code>==</code> (Loose equality), <code>===</code> (Strict equality - checks type and value)</p>

                    <div class="playground">
                        <div class="playground-header">
                            <span class="playground-title">Logic Tester</span>
                            <button class="run-btn" onclick="runCode()">▶ Run Code</button>
                        </div>
                        <div class="editor-container">
                            <textarea class="code-input" id="code-editor">
let a = 10;
let b = 5;
let check = (a > b);

console.log("10 > 5:", check);
console.log("10 === '10':", 10 === '10');
console.log("Addition:", a + b);</textarea>
                            <div class="output-container" id="output-display">
                                <span class="output-label">Output</span>
                                <div id="output-text"></div>
                            </div>
                        </div>
                    </div>
                `,
                quiz: {
                    question: "What is the result of 5 + '5' in JavaScript?",
                    options: ["10", "55", "NaN", "Error"],
                    answer: 1
                }
            },
            {
                id: "conditionals",
                title: "4. Conditionals",
                content: `
                    <h1>Conditional Statements</h1>
                    <p>Conditional statements perform different actions for different decisions.</p>

                    <h2>If, Else, Else If</h2>
                    <p>Use <code>if</code> to specify a block of code to be executed, if a specified condition is true.</p>

                    <div class="playground">
                        <div class="playground-header">
                            <span class="playground-title">Grade Checker</span>
                            <button class="run-btn" onclick="runCode()">▶ Run Code</button>
                        </div>
                        <div class="editor-container">
                            <textarea class="code-input" id="code-editor">
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}</textarea>
                            <div class="output-container" id="output-display">
                                <span class="output-label">Output</span>
                                <div id="output-text"></div>
                            </div>
                        </div>
                    </div>
                `,
                quiz: {
                    question: "Which keyword is used to execute a block if the 'if' condition is false?",
                    options: ["then", "else", "elif", "catch"],
                    answer: 1
                }
            },
            {
                id: "loops",
                title: "5. Loops",
                content: `
                    <h1>Loops</h1>
                    <p>Loops can execute a block of code a number of times.</p>
                    
                    <h2>For Loop</h2>
                    <p>The most common loop structure.</p>

                    <div class="playground">
                        <div class="playground-header">
                            <span class="playground-title">Loop Printer</span>
                            <button class="run-btn" onclick="runCode()">▶ Run Code</button>
                        </div>
                        <div class="editor-container">
                            <textarea class="code-input" id="code-editor">
// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}

console.log("---");

// Loop through an array
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}</textarea>
                            <div class="output-container" id="output-display">
                                <span class="output-label">Output</span>
                                <div id="output-text"></div>
                            </div>
                        </div>
                    </div>
                `,
                quiz: {
                    question: "Which loop iterates over the values of an iterable object?",
                    options: ["while", "do-while", "for...of", "for...in"],
                    answer: 2
                }
            }
        ]
    },
    {
        phase: "Phase 2: Core JS",
        lessons: [
            {
                id: "functions",
                title: "6. Functions",
                content: `
                    <h1>Functions</h1>
                    <p>A JavaScript function is a block of code designed to perform a particular task.</p>
                    <p>A function is executed when "something" invokes it (calls it).</p>

                    <h2>Arrow Functions (ES6)</h2>
                    <p>A shorter syntax for writing function expressions.</p>

                    <div class="playground">
                        <div class="playground-header">
                            <span class="playground-title">Function Calculator</span>
                            <button class="run-btn" onclick="runCode()">▶ Run Code</button>
                        </div>
                        <div class="editor-container">
                            <textarea class="code-input" id="code-editor">
// Regular Function
function add(a, b) {
    return a + b;
}

// Arrow Function
const multiply = (a, b) => a * b;

console.log("5 + 10 =", add(5, 10));
console.log("5 * 10 =", multiply(5, 10));</textarea>
                            <div class="output-container" id="output-display">
                                <span class="output-label">Output</span>
                                <div id="output-text"></div>
                            </div>
                        </div>
                    </div>
                `,
                quiz: {
                    question: "Which symbol is used for Arrow Functions?",
                    options: ["=>", "->", ">>", "::"],
                    answer: 0
                }
            },
            {
                id: "arrays",
                title: "7. Arrays",
                content: `
                    <h1>Arrays</h1>
                    <p>Arrays are used to store multiple values in a single variable.</p>

                    <h2>Common Methods</h2>
                    <ul>
                        <li><code>.push()</code>: Add to end.</li>
                        <li><code>.pop()</code>: Remove from end.</li>
                        <li><code>.map()</code>: Create new array by transforming.</li>
                        <li><code>.filter()</code>: Create new array with items passing a test.</li>
                    </ul>

                    <div class="playground">
                        <div class="playground-header">
                            <span class="playground-title">Array Manipulation</span>
                            <button class="run-btn" onclick="runCode()">▶ Run Code</button>
                        </div>
                        <div class="editor-container">
                            <textarea class="code-input" id="code-editor">
let numbers = [10, 20, 30, 40];

// Add 50
numbers.push(50);
console.log("After push:", numbers);

// Filter numbers greater than 25
let bigNums = numbers.filter(n => n > 25);
console.log("Filtered (>25):", bigNums);</textarea>
                            <div class="output-container" id="output-display">
                                <span class="output-label">Output</span>
                                <div id="output-text"></div>
                            </div>
                        </div>
                    </div>
                `,
                quiz: {
                    question: "Which method adds an element to the end of an array?",
                    options: ["shift()", "unshift()", "push()", "pop()"],
                    answer: 2
                }
            },
            {
                id: "dom",
                title: "8. DOM Manipulation",
                content: `
                    <h1>The DOM (Document Object Model)</h1>
                    <p>The HTML DOM is a standard object model and programming interface for HTML. It defines:</p>
                    <ul>
                        <li>The HTML elements as objects</li>
                        <li>The properties of all HTML elements</li>
                        <li>The methods to access all HTML elements</li>
                    </ul>

                    <p>For this website, we usually use <code>document.getElementById()</code> or <code>document.querySelector()</code>.</p>
                    
                    <div class="concept-card">
                        <strong>Example:</strong><br>
                        <code>document.getElementById("title").innerHTML = "Hello";</code>
                    </div>

                    <p>Since this editor is sandboxed, we can't modify the DOM of the main page, but you can practice the logic here:</p>

                    <div class="playground">
                        <div class="playground-header">
                            <span class="playground-title">DOM Simulation</span>
                            <button class="run-btn" onclick="runCode()">▶ Run Code</button>
                        </div>
                        <div class="editor-container">
                            <textarea class="code-input" id="code-editor">
// Simulating a DOM element
let mockElement = { innerHTML: "Old Title" };

console.log("Original:", mockElement.innerHTML);

// Changing the value
mockElement.innerHTML = "New Title";
mockElement.style = { color: "red" };

console.log("Updated:", mockElement.innerHTML);
console.log("Styles applied:", mockElement.style.color);</textarea>
                            <div class="output-container" id="output-display">
                                <span class="output-label">Output</span>
                                <div id="output-text"></div>
                            </div>
                        </div>
                    </div>
                `,
                quiz: {
                    question: "Which method selects an element by its ID?",
                    options: ["document.querySelector('.id')", "document.getElementByid('id')", "document.getElementById('id')", "document.id('id')"],
                    answer: 2
                }
            },
            {
                id: "events",
                title: "9. Events",
                content: `
                    <h1>Events</h1>
                    <p>HTML events are "things" that happen to HTML elements.</p>
                    <p>When JavaScript is used in HTML pages, JavaScript can "react" on these events.</p>

                    <h2>Common Events</h2>
                    <ul>
                        <li><code>onclick</code>: When user clicks.</li>
                        <li><code>onchange</code>: When form input changes.</li>
                        <li><code>onmouseover</code>: When mouse hovers.</li>
                    </ul>

                    <div class="playground">
                        <div class="playground-header">
                            <span class="playground-title">Event Logic</span>
                            <button class="run-btn" onclick="runCode()">▶ Run Code</button>
                        </div>
                        <div class="editor-container">
                            <textarea class="code-input" id="code-editor">
// Simulating an event listener
function onButtonClick() {
    console.log("Button was clicked!");
}

function onFormSubmit(username) {
    console.log("Welcome " + username + "!");
}

// Simulating the calls
console.log("Event: User clicked button");
onButtonClick();

console.log("\\nEvent: User submitted form");
onFormSubmit("Pallavi");</textarea>
                            <div class="output-container" id="output-display">
                                <span class="output-label">Output</span>
                                <div id="output-text"></div>
                            </div>
                        </div>
                    </div>
                `,
                quiz: {
                    question: "Which method attaches an event handler to an element?",
                    options: ["attachEvent()", "addEventListener()", "addHandler()", "bindEvent()"],
                    answer: 1
                }
            }
        ]
    },
    {
        phase: "Phase 3: Advanced",
        lessons: [
            {
                id: "async",
                title: "10. Async JS & Fetch",
                content: `
                    <h1>Asynchronous JavaScript</h1>
                    <p>Async functions operate in a non-blocking way. This allows the main thread to continue executing while waiting for long operations (like fetching data) to complete.</p>

                    <h2>Fetch API</h2>
                    <p>Used to make network requests.</p>

                    <div class="playground">
                        <div class="playground-header">
                            <span class="playground-title">Async / Await</span>
                            <button class="run-btn" onclick="runCode()">▶ Run Code</button>
                        </div>
                        <div class="editor-container">
                            <textarea class="code-input" id="code-editor">
console.log("Start");

// Simulating a delay using Promise
const fetchData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received from server!");
        }, 1000);
    });
};

async function getData() {
    console.log("Fetching data...");
    let data = await fetchData();
    console.log(data);
}

getData();

console.log("End (this runs before data arrives)");</textarea>
                            <div class="output-container" id="output-display">
                                <span class="output-label">Output</span>
                                <div id="output-text"></div>
                            </div>
                        </div>
                    </div>
                `,
                quiz: {
                    question: "What keyword pauses the execution of an async function?",
                    options: ["wait", "await", "pause", "yield"],
                    answer: 1
                }
            },
            {
                id: "localstorage",
                title: "11. Local Storage",
                content: `
                    <h1>Local Storage</h1>
                    <p>Local Storage allows web applications to store data locally within the user's browser with no expiration date.</p>
                    <p>Data persists even after the browser window is closed.</p>

                    <h2>Methods</h2>
                    <ul>
                        <li><code>localStorage.setItem('key', 'value')</code></li>
                        <li><code>localStorage.getItem('key')</code></li>
                        <li><code>localStorage.removeItem('key')</code></li>
                    </ul>

                    <p><em>Note: This app actually uses LocalStorage to track your course progress!</em></p>

                        <div class="playground">
                        <div class="playground-header">
                            <span class="playground-title">Storage Test</span>
                            <button class="run-btn" onclick="runCode()">▶ Run Code</button>
                        </div>
                        <div class="editor-container">
                            <textarea class="code-input" id="code-editor">
// Setting data
localStorage.setItem("myCourse", "JavaScript");

// Getting data
let course = localStorage.getItem("myCourse");
console.log("Saved Course:", course);

// We can save objects too (must stringify)
let user = { name: "Alex", level: 5 };
localStorage.setItem("userProfile", JSON.stringify(user));

// Retrieving object
let loadedUser = JSON.parse(localStorage.getItem("userProfile"));
console.log("User Level:", loadedUser.level);</textarea>
                            <div class="output-container" id="output-display">
                                <span class="output-label">Output</span>
                                <div id="output-text"></div>
                            </div>
                        </div>
                    </div>
                `,
                quiz: {
                    question: "What data type does LocalStorage store values as?",
                    options: ["Object", "JSON", "String", "Number"],
                    answer: 2
                }
            }
        ]
    }
];

// --- 2. STATE MANAGEMENT ---
let currentPhaseIndex = 0;
let currentLessonIndex = 0;

// Load progress from local storage
const userProgress = JSON.parse(localStorage.getItem('jsCourseProgress')) || {
    completedLessons: [],
    lastPhase: 0,
    lastLesson: 0
};

// --- 3. DOM ELEMENTS ---
const navContainer = document.getElementById('nav-container');
const contentDisplay = document.getElementById('content-display');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');
const progressStats = document.getElementById('progress-stats'); // New Element
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuToggle = document.getElementById('menu-toggle');

// --- 4. INITIALIZATION ---
function init() {
    renderSidebar();
    loadLesson(userProgress.lastPhase, userProgress.lastLesson);
    updateProgressUI();
}

// --- 5. RENDER FUNCTIONS ---
function renderSidebar() {
    navContainer.innerHTML = '';

    courseData.forEach((phase, pIndex) => {
        const section = document.createElement('div');
        section.className = 'nav-section';

        const header = document.createElement('div');
        header.className = 'nav-header';
        header.textContent = phase.phase;
        section.appendChild(header);

        phase.lessons.forEach((lesson, lIndex) => {
            const btn = document.createElement('button');
            btn.className = 'lesson-btn';

            // Check completion
            const lessonId = `${pIndex}-${lIndex}`;
            if (userProgress.completedLessons.includes(lessonId)) {
                btn.classList.add('completed');
            }

            // Check active
            if (pIndex === currentPhaseIndex && lIndex === currentLessonIndex) {
                btn.classList.add('active');
            }

            btn.textContent = lesson.title;
            btn.onclick = () => {
                loadLesson(pIndex, lIndex);
                // On mobile, close sidebar after click
                if (window.innerWidth <= 768) {
                    toggleSidebar();
                }
            };

            section.appendChild(btn);
        });

        navContainer.appendChild(section);
    });
}

function loadLesson(pIndex, lIndex) {
    currentPhaseIndex = pIndex;
    currentLessonIndex = lIndex;

    const lesson = courseData[pIndex].lessons[lIndex];

    // Update UI State
    document.querySelectorAll('.lesson-btn').forEach(btn => btn.classList.remove('active'));
    renderSidebar(); // Re-render to update active state cleanly

    document.getElementById('lesson-title-header').textContent = lesson.title;

    // Render Content
    let htmlContent = `
        <div class="lesson-content">
            ${lesson.content}
            
            <div class="quiz-section">
                <h3>🧠 Quick Quiz</h3>
                <p>${lesson.quiz.question}</p>
                <div class="quiz-options">
                    ${lesson.quiz.options.map((opt, idx) =>
        `<div class="quiz-option" onclick="checkAnswer(this, ${idx}, ${lesson.quiz.answer})">${opt}</div>`
    ).join('')}
                </div>
                <div class="feedback-msg" id="feedback"></div>
            </div>

            <div class="nav-footer">
                <button class="nav-btn" id="prevBtn" onclick="navigate(-1)" ${pIndex === 0 && lIndex === 0 ? 'disabled' : ''}>← Previous</button>
                <button class="nav-btn" id="nextBtn" onclick="markCompleteAndNext()">Next →</button>
            </div>
        </div>
    `;

    contentDisplay.innerHTML = htmlContent;

    // Save progress location
    saveProgressLocation();
}

// --- 6. INTERACTIVE LOGIC ---

// Live Code Runner
window.runCode = function () {
    const code = document.getElementById('code-editor').value;
    const outputDiv = document.getElementById('output-text');
    outputDiv.innerHTML = ''; // Clear previous

    // Capture console.log
    const logs = [];
    const originalLog = console.log;

    console.log = (...args) => {
        logs.push(args.map(arg =>
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' '));
    };

    try {
        // Create a function to run the code string
        new Function(code)();

        // Display logs
        if (logs.length > 0) {
            logs.forEach(log => {
                const p = document.createElement('div');
                p.textContent = "> " + log;
                p.style.marginBottom = "5px";
                outputDiv.appendChild(p);
            });
        } else {
            outputDiv.innerHTML = "<span style='color:#777'>No output generated (try using console.log)</span>";
        }
    } catch (error) {
        const p = document.createElement('div');
        p.style.color = '#e74c3c';
        p.textContent = "Error: " + error.message;
        outputDiv.appendChild(p);
    } finally {
        // Restore console.log
        console.log = originalLog;
    }
};

// Quiz Logic
window.checkAnswer = function (element, index, correctIndex) {
    const parent = element.parentElement;
    const feedback = document.getElementById('feedback');

    // Disable all options
    Array.from(parent.children).forEach(child => child.style.pointerEvents = 'none');

    if (index === correctIndex) {
        element.classList.add('correct');
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "var(--accent-green)";
        // Automatically mark lesson as ready to complete
        element.dataset.status = "pass";
    } else {
        element.classList.add('wrong');
        parent.children[correctIndex].classList.add('correct'); // Show correct answer
        feedback.textContent = "Incorrect. Review the lesson and try again.";
        feedback.style.color = "var(--accent-red)";
        element.dataset.status = "fail";
    }
};

// Navigation Logic
function navigate(direction) {
    let newP = currentPhaseIndex;
    let newL = currentLessonIndex + direction;

    if (newL < 0) {
        newP--;
        if (newP < 0) return;
        newL = courseData[newP].lessons.length - 1;
    } else if (newL >= courseData[newP].lessons.length) {
        newP++;
        if (newP >= courseData.length) return;
        newL = 0;
    }

    loadLesson(newP, newL);
}

function markCompleteAndNext() {
    // 1. Mark current lesson as completed
    const lessonId = `${currentPhaseIndex}-${currentLessonIndex}`;
    if (!userProgress.completedLessons.includes(lessonId)) {
        userProgress.completedLessons.push(lessonId);
    }

    // 2. Save to storage
    localStorage.setItem('jsCourseProgress', JSON.stringify(userProgress));

    // 3. Update UI
    updateProgressUI();
    renderSidebar();

    // 4. Move Next
    navigate(1);
}

function updateProgressUI() {
    const totalLessons = courseData.reduce((acc, phase) => acc + phase.lessons.length, 0);
    const completed = userProgress.completedLessons.length;
    const percent = totalLessons === 0 ? 0 : Math.round((completed / totalLessons) * 100);

    progressBar.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;

    // Update detailed stats if element exists, or valid console log if not found yet (will add to HTML next)
    if (document.getElementById('progress-stats')) {
        document.getElementById('progress-stats').textContent = `${completed}/${totalLessons} Done`;
    }
}

function saveProgressLocation() {
    userProgress.lastPhase = currentPhaseIndex;
    userProgress.lastLesson = currentLessonIndex;
    localStorage.setItem('jsCourseProgress', JSON.stringify(userProgress));
}

// --- 7. MOBILE UI ---
function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Start App
init();
