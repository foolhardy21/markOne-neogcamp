const readline = require('readline-sync')
const quizdata = require('./quizdata')
let points = 0
let userName = ''

const askQuestion = text => readline.question(`${text}\n`)

const printVerdict = text => {
  console.log(text)  
}
const checkAnswerValidity = (originalAnswer, userAnswer) => originalAnswer.toLowerCase() == userAnswer.toLowerCase() ? true : false

const welcomeUser = () => {
  userName = askQuestion('Your name?')
  printVerdict(`Welcome to SUPERHERO QUIZ ${userName}!`)
}
const playGame = () => {
  for (let i = 0; i < quizdata.length; i++) {
    let userAnswer = askQuestion(quizdata[i].ques)
    if(checkAnswerValidity(quizdata[i].ans, userAnswer)) {
        printVerdict('correct!')
        points++
      }
      else {
        printVerdict('wrong.')
      }  
  }

}
const finalVerdict = () => {
printVerdict(`${userName}, you got ${points} out of 5.`)

}

welcomeUser()
playGame()
finalVerdict()