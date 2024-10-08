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
    if (this.getQuestion().answer === answer) {
      this.correctAnswers += 1
    }
  }

  hasEnded () {
    return this.currentQuestionIndex >= this.questions.length
  }
  filterQuestionsByDifficulty (difficulty) {
    if (typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3) {
      return
    }
    const filteredQuestions = []
    if (1 <= difficulty <= 3) {
      for (let i = 0; i < this.questions.length; i++) {
        if (this.questions[i].difficulty === difficulty) {
          filteredQuestions.push(this.questions[i])
        }
      }

      this.questions = filteredQuestions
    }
  }
}
