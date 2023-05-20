
const quizDB = [
{
    question: "Q1: Who is the father of Computers?",
    a: "James Gosling",
    b: "Charles Babbage",
    c: "Dennis Ritchie",
    d: "Bjarne Stroustrup",
    ans: "ans2"
},
{
    question: "Q2: Name 1st Electronic computer?",
    a: "CPU",
    b: "Sillico sapiens",
    c: "ENIAC",
    d: "Analytical machine",
    ans: "ans3"
},
{
    question: "Q3: What is FORTRAN use for?",
    a: "For Translation",
    b: "Formula Translation",
    c: "Case Sensitive",
    d: "Script",
    ans: "ans2"
},
{
    question: "Q4: The first web browser is ___?",
    a: "Mosaic",
    b: "Nexus",
    c: "Internet Explorer",
    d: "Chrome",
    ans: "ans1"
 }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score=0;

const loadQuestion = ()  => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer=() => {
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer= curAnsElem.id;
        }
    });
    return answer;
};

submit.addEventListener('click',()=> {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    if(questionCount < quizDB.length){
        loadQuestion();

    }else{
        showScore.innerHTML = `
        <h3>🤩🤩🤩🤩 You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Restart</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});