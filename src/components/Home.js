import React from 'react';
import { Jumbotron, Panel } from 'react-bootstrap';
import LoginForm from './LoginForm';
import ChatRoom from './ChatRoom';
import logo from '../logo.svg';

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
    }
  }

  userFormSubmit = e => {
    e.preventDefault()
    this.setState({
      username: e.target[0].value
    })
  }

  render(){
    const content = this.state.username === '' ? <LoginForm onPress={e => this.userFormSubmit(e)}/> :
      <div>
        <h1>
          Welcome <strong>{this.state.username}</strong>
        </h1>
        <ChatRoom username={this.state.username} />
      </div>

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
