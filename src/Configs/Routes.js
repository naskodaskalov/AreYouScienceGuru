import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../Components/Homepage'
import TopRanking from '../Components/TopRanking'
import Quiz from '../Components/Quiz'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/home' component={Homepage} />
    <Route path='/quiz' component={Quiz} />
    <Route path='/topranking' component={TopRanking} />
  </Switch>
)

export default Routes
