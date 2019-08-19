import React, { Component} from 'react'

import Data from '../Configs/DatabaseConfig'

export default class Quiz extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: [],
      answers: [],
      totalQuestionsCount: 0,
      questionNumber: 1,
      hasMoreQuestion: true,
      showResults: false,
      correctMarkedAnswers: '',
      correctAnswers: '',
      error: ''
    }

    this.showNextQuestion = this.showNextQuestion.bind(this)
    this.selectAnswer = this.selectAnswer.bind(this)
    this.showResults = this.showResults.bind(this)
    this.markAnswer = this.markAnswer.bind(this)
    this.clearAnswerStyling = this.clearAnswerStyling.bind(this)
    this.checkMarkedAnswers = this.checkMarkedAnswers.bind(this)
  }

  componentDidMount () {
    Data.get('quiz/-LmBTYhIeIX-cIlgBBvq').then(questions => this.setState({
      questions,
      totalQuestionsCount: questions.length,
      questionNumber: this.props.questionNumber
    }))
  }

  checkMarkedAnswers () {
    let answers = this.state.answers
    let markedAnswers = ''
    let count = 0

    for (let j = 0; j < answers.length; j++) {
      const answer = answers[j]
      markedAnswers += answer.answerId
    }

    Data
      .get('quiz/correctanswers')
      .then(data => {
        for (let t = 0; t < markedAnswers.length; t++) {
          let answer = markedAnswers[t]
          let ca = data[0][t]

          if (answer == ca) {
            count++
          }
        }

        this.setState({ correctMarkedAnswers: count })
      }
    )
  }

  showNextQuestion (e) {
    e.preventDefault()
    let selectedAnswers = document.getElementsByClassName('list-group-item list-group-item-info')
    if (selectedAnswers.length > 0) {
      var count = parseInt(e.target.dataset['count'])
      this.setState({ questionNumber: count + 1 })
      this.clearAnswerStyling()
    } else {
      this.setState({ error: 'You have to choose answer to this question!' })
    }
  }

  markAnswer (e) {
    this.clearAnswerStyling()
    e.target.className = 'list-group-item list-group-item-info'
  }

  clearAnswerStyling () {
    let selectedAnswers = document.getElementsByClassName('list-group-item list-group-item-info')
    for (let i = 0; i < selectedAnswers.length; i++) {
      selectedAnswers[i].className = 'list-group-item list-group-item-action list-group-item-light'
    }
    this.setState({ error: '' })
  }

  selectAnswer (e) {
    var answer = {
      id: this.state.questionNumber + 1,
      answer: e.target.innerText,
      answerId: e.target.dataset['answerid']
    }
    this.markAnswer(e)
    this.setState({
      answers: [...this.state.answers, answer]
    })
  }

  showResults (e) {
    e.preventDefault()
    this.checkMarkedAnswers()
    this.setState({ showResults: true })
  }

  render () {
    if (!this.props.visibility) {
      return null
    }
    let question = this.state.questions[this.state.questionNumber]
    let content = (
      <div>
        <h3>{question.title}</h3>
        {question.image && (
          <img src={require('../images/' + question.image)} className='question-image' alt='' />
        )}
        <ul className='list-group'>
          {question.answers.map((answer, index) => (
            <li className='list-group-item list-group-item-action list-group-item-light' data-answerid={index} key={index} onClick={this.selectAnswer}>{answer}</li>
    ))}
        </ul>
      </div>
          )

    let hasMoreQuestion = ''

    if (parseInt(this.state.questionNumber) + 2 <= this.state.questions.length) {
      hasMoreQuestion = (<input
        name='nextQuestionBtn'
        id='nextQuestionBtn'
        className='btn btn-outline-secondary mt-md-3'
        type='button'
        value='Next question'
        data-count={this.state.questionNumber}
        onClick={this.showNextQuestion}
        />)
    } else {
      hasMoreQuestion = (<input
        name='nextQuestionBtn'
        id='nextQuestionBtn'
        className='btn btn-outline-secondary mt-md-3'
        type='button'
        value='Show results'
        data-count={this.state.questionNumber}
        onClick={this.showResults}
        />)
    }

    let progress = parseFloat(this.state.questionNumber + 1) / parseFloat(this.state.questions.length) * 100
    progress = Math.round(progress)

    let showResults = this.state.showResults

    return (
      <div id='quiz' className='row'>
        {showResults ? (
          <div>
            {this.state.correctMarkedAnswers}
          </div>
        ) : (
          <div className='container row'>
            <div className='col-md-4 blockquote-footer'>
              <h3>{this.state.questionNumber + 1} of {this.state.totalQuestionsCount} questions</h3>
              <div className='progress'>
                <div className='progress-bar progress-bar-striped progress-bar-animated' role='progressbar' style={{width: progress + '%'}} aria-valuenow={progress} aria-valuemin='0' aria-valuemax='100'>{progress}%</div>
              </div>
            </div>
            <div className='col-md-8'>
              {content}
              {this.state.error.length > 0 && (
                <div className='list-group-item list-group-item-danger'>{this.state.error}</div>
              )}
              {hasMoreQuestion}
            </div>
          </div>
        )}

      </div>
    )
  }
}
