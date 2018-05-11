import React from 'react';
import { Jumbotron, Panel } from 'react-bootstrap';
import LoginForm from './LoginForm';
import logo from '../logo.svg';

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
    }
  }

  render(){
    const content = this.state.username === '' ? <LoginForm/> : <h1>logged in</h1>
    return(
      <div>
        <Jumbotron>
          <h1>Rocket.io</h1>
          <p style={{marginTop: 20,}}>A simple, barebones React and Socket.io chat app created by <a href="https://c-hering.github.io">Caleb Hering</a></p>
        </Jumbotron>
        <div style={{margin: 10,}}>
          {content}
        </div>
      </div>
    )
  }
}
