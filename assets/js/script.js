const startButton = document.getElementById('start')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')

let  shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions =question.sort(() => Math.random() -.5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion(shuffledQuestions, currentQuestionsIndex)
}

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
}

function selectAnswer(e) {

}

const question = [
    {
        question: 'In what year did Elvis Presley die?',
        answers: [
            {text: '1977', correct: true},
            {text: '1980', wrong: false},
            {text: '1968', wrong: false},
            {text: '1979', wrong: false},
        ]
    }
]