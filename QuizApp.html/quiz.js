

const questions = [
    { q: "HTML stands for?", a: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None"], correct: 0 },
    { q: "CSS is used for?", a: ["Structuring", "Scripting", "Styling", "Storage"], correct: 2 },
    { q: "Capital of France?", a: ["Paris", "London", "Berlin", "Rome"], correct: "0" },
    { q: "Which property changes text color in CSS?", a: ["font", "color", "background", "text"], correct: 1 },
    { q: "JavaScript runs in:", a: ["Browser", "Server", "Both", "None"], correct: 2 },
    { q: "Which is NOT a JavaScript data type?", a: ["String", "Number", "Boolean", "Float"], correct: 3 },
    { q: "Which is the correct CSS syntax?", a: ["body:color=black;", "body {color: black;}", "{body;color:black;}", "body={color:black;}"], correct: 1 },
    { q: "Which event occurs when a user clicks an HTML element?", a: ["onchange", "onmouseclick", "onclick", "onmouseover"], correct: 2 },
    { q: "Which method adds a new element to an array?", a: ["push()", "pop()", "add()", "insert()"], correct: 0 },
    { q: "How do you write 'Hello World' in an alert box?", a: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');"], correct: 2 },
    { q: "Which symbol is used for comments in JavaScript?", a: ["//", "<!-- -->", "#", "**"], correct: 0 },
    { q: "How do you call a function named myFunction?", a: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"], correct: 1 },
    { q: "How to write an IF statement in JavaScript?", a: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i == 5 then"], correct: 1 },
    { q: "Which HTML attribute is used to define inline styles?", a: ["styles", "style", "class", "font"], correct: 1 },
    { q: "Which is the correct way to comment in CSS?", a: ["// comment", "<!-- comment -->", "/* comment */", "# comment"], correct: 2 }
];

let current = 0;
let score = 0;
let time = 10;
let timer;

function loadQuestion() {
    if (current >= questions.length) return showResults();
    document.getElementById("question").innerText = questions[current].q;
    let opts = "";
    questions[current].a.forEach((opt, idx) => {
        opts += `
      <div>
        <input type="radio" id="opt${idx}" name="option" value="${idx}" />
        <label for="opt${idx}">${opt}</label>
      </div>
    `;
    });
    document.getElementById("options").innerHTML = opts;
    document.getElementById("timer").innerText = "Time: 10";
    time = 10;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    time--;
    document.getElementById("timer").innerText = "Time: " + time;
    if (time <= 0) {
        clearInterval(timer);
        nextQuestion();
    }
}

function nextQuestion() {
  clearInterval(timer);
  let selected = document.querySelector("input[name='option']:checked");
  if (selected && parseInt(selected.value) === questions[current].correct) score++;
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("showResultBtn").style.display = "inline-block";
  }
}


function showResults() {
    document.getElementById("questionBox").classList.add("hidden");
    document.getElementById("resultBox").classList.remove("hidden");
    document.getElementById("score").innerText = score;
    let stars = "★".repeat(score >= 13 ? 5 : score >= 10 ? 4 : score >= 7 ? 3 : score >= 4 ? 2 : 1);
    document.getElementById("stars").innerText = stars;

    let highscores = JSON.parse(localStorage.getItem("scores")) || [];
    highscores.push(score);
    highscores.sort((a, b) => b - a);
    highscores = highscores.slice(0, 5);
    localStorage.setItem("scores", JSON.stringify(highscores));

    let list = "";
    highscores.forEach((s, i) => list += `<li>${i + 1}. ${s}</li>`);
    document.getElementById("leaderboard").innerHTML = list;
}

loadQuestion();
