class Quiz {
  // YOUR CODE HERE:
  //
  constructor (questions, timeLimit, timeRemaining) {
    this.questions = questions
    this.timeLimit = timeLimit
    this.timeRemaining = timeRemaining
    this.correctAnswers = 0
    this.currentQuestionIndex = 0
  }

  getQuestion () {
    return this.questions[this.currentQuestionIndex]
  }

  moveToNextQuestion () {
    this.currentQuestionIndex += 1
  }

  shuffleQuestions () {
    for (let i = 0; i < this.questions.length - 1; i++) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i]
      ]
    }
  }

  checkAnswer (answer) {
    if (answer) {
      this.correctAnswers += 1
    }
  }

  hasEnded () {
    return this.currentQuestionIndex >= this.questions.length
  }
}
