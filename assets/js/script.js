const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')
const time = document.querySelector('h2');
const timeP = document.getElementsByClassName('time')
const Delay = document.getElementsByClassName('exit-btn')

let timeSecond = 60;

// timer countdown  //

time.innerHTML = '00:${timeSecond}';

const countDown = setInterval (()=>{
timeSecond--;
time.innerHTML = timeSecond;
if (timeSecond <=0 || timeSecond <1){
    endtime();
    clearInterval(countDown);
}
},1000)

let  shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)
time.classList.add('hide')
nextButton.addEventListener('click', () =>{
    currentQuestionsIndex++
    setNextQuestion()
   
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions =question.sort(() => Math.random() -.5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    time.classList.remove('hide')
    setNextQuestion(shuffledQuestions, currentQuestionsIndex)
}
function endtime() {
    time.innerHTML = "Times UP"
}
function start()
{
    document.getElementById("start").
    startTimer();
};

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText= question.question
    question.answers.forEach(answer => {
        const button= document.createElement('button')
        button.innerText= answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex +1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText='restart quiz'
        startButton.classList.remove('hide')
    }
   
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
     } else {
            element.classList.add('wrong')
        }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// quiz questions //

const question = [
    {
        question: 'In what year did Elvis Presley die?',
        answers: [
            {text: '1977', correct: true},
            {text: '1980', wrong: false},
            {text: '1968', wrong: false},
            {text: '1979', wrong: false},
        ]
    },
    {
        question: 'Rock band AC/DC originates from which country?',
        answers: [
            {text: 'Australia', correct: true},
            {text: 'Ireland', wrong: false},
            {text: 'China', wrong: false},
            {text: 'Germany', wrong: false},
        ]
    },
    {
        question: 'What is Irish musician Hoziers real name?',
        answers: [
            {text: 'John', wrong: false},
            {text: 'Paul', wrong: false},
            {text: 'Andrew', correct: true},
            {text: 'Mark', wrong: false},
        ]
    },
    {
        question: 'Roger Taylor is the drummer in which band?',
        answers: [
            {text: 'Oasis', wrong: false},
            {text: 'Queen', correct: true},
            {text: 'Guns & Roses', wrong: false},
            {text: 'Coldplay', wrong: false},
        ]
    },
    {
        question: 'Who was the very first American Idol winner?',
        answers: [
            {text: 'Kelly Clarkson', correct: true},
            {text: 'Ruben Studdard ', wrong: false},
            {text: 'Carrie Underwood', wrong: false},
            {text: 'Fantasia Barrino', wrong: false},
        ]
    },
    {
        question: 'What was Madonnas first top 10 hit?',
        answers: [
            {text: 'Vogue', wrong: false},
            {text: 'Holiday', correct: true},
            {text: 'Papa Dont Preach', wrong: false},
            {text: 'Crazy for You', wrong: false},
        ]
    },
    {
        question: 'Eminems 8 Mile is named after a road in which city?',
        answers: [
            {text: 'Nashville', wrong: false},
            {text: 'Manhattan', wrong: false},
            {text: 'Toronto', wrong: false},
            {text: 'Detroit', correct: true},
        ]
    },
    {
        question: 'Singer Fergie was previously a member of which hip hop group?',
        answers: [
            {text: 'N-duz', wrong: false},
            {text: 'The Black Eyed Peas', correct: true},
            {text: 'The Pussycat Dolls ', wrong: false},
            {text: 'Far East Movement', wrong: false},
        ]
    },
    {
        question: 'Who was the first lead guitarist of Metallica?',
        answers: [
            {text: 'John Frusciante', wrong: false},
            {text: 'Saul Hudson', wrong: false},
            {text: 'Bill Wyman', wrong: false},
            {text: 'Dave Mustaine', correct: true},
        ]
    },
    {
        question: 'Where was Tupac Shakur born?',
        answers: [
            {text: 'New York', correct: true},
            {text: 'New Orleans', wrong: false},
            {text: 'Atlanta', wrong: false},
            {text: 'Memphis',  wrong: false},
        ]
    },]