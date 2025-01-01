const questions = [
    {
        question:"Which is largest animal in the world?",
        answer: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question:"Which is largest desert in the world?",
        answer: [
            {text: "kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antartica", correct: true},
        ]
    },
    {
        question:"Which is smallest continent in the world?",
        answer: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question:"Which is smallest country in the world?",
        answer: [
            {text: "Vatican City", correct: false},
            {text: "Bhutan", correct: true},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestion
