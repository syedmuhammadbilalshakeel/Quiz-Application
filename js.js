// javascriptallquizes
var htmlQuizQuestion = [
    {
        question: "Q1 : Inside which HTML element do we put the JavaScript?",
        a: "<'scripting'>",
        b: "<'js'>",
        c: "<'javascript'>",
        d: "<'script'>",
        ans: "ans4",
    },
    {
        question: "Q2 : Where is the correct place to insert a JavaScript?",
        a: "In the <'body'> section",
        b: "In the <'head'> section",
        c: "Both the <'head'> section and the <'body'> section are correct",
        d: "In the <'title'> section",
        ans: "ans3",
    },
    {
        question: "Q3 : What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: "<'script name = 'xxx.js''>",
        b: "<'script href = 'xxx.js''>",
        c: "<'script src = 'xxx.js''>",
        d: "<'script alt = 'xxx.js''>",
        ans: "ans3",
    },
    {
        question: "Q4 : The external JavaScript file must contain the <'script'> tag",
        a: "true",
        b: "false",
        c: "external",
        d: "internal",
        ans: "ans2",
    },
    {
        question: "Q5 : How do you write 'Hello World' in an alert box?",
        a: "msgBox('Hello World');",
        b: "alert('Hello World');",
        c: "Box('Hello World');",
        d: "alertBox('Hello World');",
        ans: "ans2",
    },
    {
        question: "Q6 : How do you create a function in JavaScript?",
        a: "function = myFuction()",
        b: "function:myFunction()",
        c: "function myFunction()",
        d: "function::myFunction()",
        ans: "ans3",
    },
    {
        question: "Q7 : How do you call a function named 'myFunction'?",
        a: "call function myFunction()",
        b: "call myFunction()",
        c: "myFunction()",
        d: "mycall myFunction()",
        ans: "ans3",
    },
    {
        question: "Q8 : How to write an IF statement in JavaScript?",
        a: "if i = 5 then",
        b: "if i == 5 then",
        c: "if (i == 5)",
        d: "if i = 5",
        ans: "ans3",
    },
    {
        question: "Q9 : How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        a: "if i =! 5 then",
        b: "if (i != 5)",
        c: "if i <> 5",
        d: "if (i <> 5)",
        ans: "ans2",
    },
    {
        question: "Q10 : How does a WHILE loop start?",
        a: "while (i <= 10; i++)",
        b: "while (i <= 10)",
        c: "while i = 1 to 10",
        d: "while (var i = 0; i <= 10);",
        ans: "ans2",
    },
    {
        question: "Q11 : How does a FOR loop start?",
        a: "for i = 0; i < 25;",
        b: "for i = 0",
        c: "for (i = 0; i < 25; i++)",
        d: "for (i = 0; i < 25)",
        ans: "ans3",
    },
    {
        question: "Q12 : How can you add a comment in a JavaScript?",
        a: "'This is a commment",
        b: "// This is a comment",
        c: "<'!-- This is a comment !--'>",
        d: ": This is a comment;",
        ans: "ans2",
    },
    {
        question: "Q13 : How to insert a comment that has more than one line?",
        a: "'This is a commment",
        b: "// This is a comment",
        c: "<'!-- This is a comment !--'>",
        d: "/*This is a comment*/",
        ans: "ans4",
    },
    {
        question: "Q14 : What is the correct way to write a JavaScript array?",
        a: "var color = 'red','green','blue'",
        b: "var color = (red,green,blue)",
        c: "var color = {'red','green','blue}",
        d: "var color = ['red','green','blue']",
        ans: "ans4",
    },
    {
        question: "Q15 : How do you round the number 7.25, to the nearest integer?",
        a: "Math.rnd(7.25)",
        b: "round(7.25)",
        c: "Math.round(7.25)",
        d: "rnd(7.25)",
        ans: "ans3",
    },
    {
        question: "Q16 : How do you find the number with the highest value of x and y?",
        a: "ceil(x,y)",
        b: "Math.ceil(x,y)",
        c: "top(x,y)",
        d: "Math.max(x,y)",
        ans: "ans4",
    },
    {
        question: "Q17 : What is the correct JavaScript syntax for opening a new window called 'w2' ?",
        a: "w2 = window.new('https://www.facebook.com')",
        b: "w2 = window.open('https://www.facebook.com')",
        c: "w2 : window.new('https://www.facebook.com')",
        d: "w2 = new.window('https://www.facebook.com')",
        ans: "ans2",
    },
    {
        question: "Q18 : JavaScript is the same as Java.",
        a: "yes",
        b: "no",
        c: "Intenal Jva",
        d: "External Java",
        ans: "ans2",
    },
    {
        question: "Q19 : How can you detect the client's browser name?",
        a: "client.navName",
        b: "browser.name",
        c: "navigator.appName",
        d: "client.name",
        ans: "ans3",
    },
    {
        question: "Q20 : Which event occurs when the user clicks on an HTML element?",
        a: "onClick",
        b: "onChange",
        c: "onMouseClick",
        d: "onMouseOut",
        ans: "ans1",
    },
    {
        question: "Q21 : How do you declare a JavaScript variable?",
        a: "variable carName;",
        b: "v carName",
        c: "var carName",
        d: "var:car",
        ans: "ans3",
    },
    {
        question: "Q22 : Which operator is used to assign a value to a variable?",
        a: "=",
        b: "-",
        c: "*",
        d: "x",
        ans: "ans1",
    },
    {
        question: "Q23 : What will the following code return: Boolean(10 > 9)",
        a: "true",
        b: "NaN",
        c: "false",
        d: "undefined",
        ans: "ans1",
    },
    {
        question: "Q24 : Is JavaScript case-sensitive?",
        a: "yes",
        b: "no",
        c: "case",
        d: "sensitive",
        ans: "ans1",
    },
    {
        question: "Q25 : How do you round the number 7.25, to the higest integer?",
        a: "Math.ceil(7.25)",
        b: "round(7.25)",
        c: "Math.round(7.25)",
        d: "ceil(7.25)",
        ans: "ans1",
    },
]


var question = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var next = document.querySelector("#next");


var answers = document.getElementsByName("answer");

var showScore = document.querySelector("#showScore");
// console.log(showScore);

var qusetionCount = 0;
var score = 0;
var questionBack = 25;

function loadQuestion() {

    var qusetionList = htmlQuizQuestion[qusetionCount];

    question.innerHTML = qusetionList.question;
    option1.innerHTML = qusetionList.a;
    option2.innerHTML = qusetionList.b;
    option3.innerHTML = qusetionList.c;
    option4.innerHTML = qusetionList.d;
}
loadQuestion();

function getCheckAnswer() {
    var answer;

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].id;
        }
    }
    return answer;
}

function dselectAll() {
    for (var i = 0; i < answers.length; i++) {
        answers[i].checked = false;
    }
}

next.addEventListener("click", () => {
    var checkedAnswer = getCheckAnswer();
    // console.log(checkedAnswer);

    if (checkedAnswer === htmlQuizQuestion[qusetionCount].ans) {
        score++;
    }

    qusetionCount++;

    dselectAll();

    if (qusetionCount < htmlQuizQuestion.length) {
        loadQuestion();
    }
    else if (score >= 20) {
        showScore.innerHTML = `
          <h4 id="heading50"> Congratulation You Have Passed ${score}/${htmlQuizQuestion.length} 🏆 </h4>
          <button id="button34" onclick ="location.reload()" type="button" class="btn btn-primary">Play Again</button>
        `
        showScore.classList.remove("scoreArea")
    }
    else {
        showScore.innerHTML = `
          <h4 id="heading50"> You  Are Fail ${score}/${htmlQuizQuestion.length} 😞 </h4>
          <button id="button34" onclick ="location.reload()" type="button" class="btn btn-primary">Play Again</button>
        `
        showScore.classList.remove("scoreArea")
    }
})


// var startingMin = 30;
var startingMin = 50;
var time = startingMin * 60;

var countDowne = document.getElementById("countDowne");

setInterval(updateCountDown, 1000);

function updateCountDown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    // seconds = seconds < 30 ? '0' + seconds : seconds;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDowne.innerHTML = `${minutes}:${seconds}`;
    time--;
}