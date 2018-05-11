import React from 'react';
import { Jumbotron, Panel } from 'react-bootstrap';
import logo from '../logo.svg';

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
    }
  }

  render(){
    const content = this.state.username === '' ? <h1>not logged in</h1> : <h1>logged in</h1>
    return(
      <div>
        <Jumbotron>
          <h1>Rocket.io</h1>
          <p>A simple, barebones React and Socket.io chat app created by <a href="https://c-hering.github.io">Caleb Hering</a></p>
        </Jumbotron>
        <div style={{margin: 10,}}>
          <Panel>
            <Panel.Body>{content}</Panel.Body>
          </Panel>
        </div>
      </div>
    )
  }
}
