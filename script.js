const quizData = [
    {
        question : 'Inside which HTML element do we put the JavaScript?',
        a :'<js>',
        b:'<scripting>',
        c:'<script>',
        d:'<javascript',
        correct:'c'
    },{
        question : 'Every valid web page can be represented as a tree. ',
        a :'API',
        b:'DOM',
        c:' JavaScript',
        d:'Binary tree',
        correct:'b'
    },{
        question : 'JavaScript uses what kind of interface to access the DOM structure?',
        a :'HTML5',
        b:'an API',
        c:'CSS3',
        d:'CSAS',
     
        correct:'b'
    },{
        question : 'Which of these is not valid? (Hint pay attention to if the method should return one thing. or many things..)',
        a :'document.getElementsByClassName(className)',
        b:' document.getElementsByTagName(tagName)',
        c:'document.getElementsByld(idName)',
        d:'document.getElementsByld(Name)',

        correct:'c'
    }
    ,{
        question : 'Which of the following is not a valid method for generating output to the screen?',
        a :'document.write',
        b:'prompt',
        c:'print',
        d:'console.log(idName)',
        correct:'c'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}



submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload();">Reload</button>
            `;
        }
    }
});