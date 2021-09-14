const readline = require('readline-sync')
const quiz = require('./quizdata')
let points = 0
let userName = ''

function askQuestion(text) {
  return readline.question(`${text}\n`)
}
function printVerdict(text) {
  console.log(text)  
}
function checkAnswerValidity(originalAnswer, userAnswer) {
  return originalAnswer.toLowerCase() == userAnswer.toLowerCase() ? true : false
}
function welcomeUser() {
  userName = askQuestion('Your name?')
  printVerdict(`Welcome to SUPERHERO QUIZ ${userName}!`)
}
function playGame() {
  for (let i = 0; i < quiz.length; i++) {
    let userAnswer = askQuestion(quiz[i].ques)
    if(checkAnswerValidity(quiz[i].ans, userAnswer)) {
        printVerdict('correct!')
        points++
      }
      else {
        printVerdict('wrong.')
      }  
  }

}
function finalVerdict() {
printVerdict(`${userName}, you got ${points} out of 5.`)

}

welcomeUser()
playGame()
finalVerdict()