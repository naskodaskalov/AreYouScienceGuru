import React, { Component } from 'react'
import Quiz from './Quiz'

export default class Homepage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      startQuiz: false,
      questionNumber: 0
    }

    this.handleQuizStart = this.handleQuizStart.bind(this)
  }

  handleQuizStart (e) {
    e.preventDefault()
    this.setState({ startQuiz: true })
  }
  render () {
    let showStartBtn = ''

    if (!this.state.startQuiz) {
      showStartBtn = (<input
        name='startQuiz'
        id='startQuiz'
        className='btn btn-primary'
        type='button'
        value='Start quiz'
        onClick={this.handleQuizStart} />)
    }

    return (
      <div className='container'>
        {!this.state.startQuiz ? (
          <div>
            <h2>How much do you know about science?</h2>
            <p className='mr-md-3 ml-md-3 px-md-5'>Test your knowledge of science facts and applications of scientific principles by taking our 11-question quiz. When you finish, you will be able to compare your scores with the average American and compare responses across demographic groups. Our nationally representative poll of 4,464 randomly selected U.S. adults was conducted on Pew Research Center's American Trends Panel between Jan. 7 and Jan. 21, 2019. The analysis of the findings from the poll can be found in the full report, <a href='https://www.pewresearch.org/science/2019/03/28/what-americans-know-about-science/' target='_blank' rel='noopener noreferrer'>“What Americans Know About Science.”</a></p>
          </div>
        ) : (
          <div />
        )}
        {showStartBtn}
        <Quiz visibility={this.state.startQuiz} questionNumber={this.state.questionNumber} />
      </div>
    )
  }
}
