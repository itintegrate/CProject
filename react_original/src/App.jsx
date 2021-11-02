import React, { Component } from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import './App.css'
import { Button,message} from 'antd'

import Login from './pages/login'
import Admin from './pages/admin'

export default class App extends Component {
  handleClick = ()=>{
    message.success('yes...')
  }
  render() {
    return (
      <BrowserRouter>
       <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Admin} /> 
       </Switch>
      </BrowserRouter>
    )
  }
}
