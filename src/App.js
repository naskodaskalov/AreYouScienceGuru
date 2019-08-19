import React, { Component } from 'react'
import './App.css'
import Routes from './Configs/Routes'
import Header from './Components/Header'
import Nav from './Components/Nav'

export default class App extends Component {
  render () {
    return (
      <div className='App pt-md-2 pb-md-5'>
        <div className='container'>
          <div className='container-fluid'>
            <Header />
            <Nav />
            <Routes />
            <blockquote className='blockquote mt-5'>
              <footer className='blockquote-footer'>&copy; 2019 <cite title='&copy; Nasko Daskalov'>Nasko Daskalov</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
    )
  }
}
