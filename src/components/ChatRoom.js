import React from 'react';
import { Panel, Form, FormGroup, FormControl, Col, Row, Button } from 'react-bootstrap';
import { recieveNewMessage, sendNewMessage } from './Socket';
import Message from './Message';

export default class ChatRoom extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      messages: []
    }
    recieveNewMessage(data => this.setState({
      messages: this.state.messages.concat(data.uname + ": " + data.body)
    }))
    this.handleChange = this.handleChange.bind(this)
  }



  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    const messages = this.state.messages.length === 0 ? '' : this.state.messages.map(msg => <Message messageText={msg} />)
    return(
      <div>
        <Row>
          <Col smOffset={3} sm={6}>
            <Panel style={{height: 500}}>
              {messages}
            </Panel>
          </Col>
        </Row>
        <Row>
          <Form inline onSubmit={e => {
            e.preventDefault()
            sendNewMessage(e.target[0].value, this.props.username)
            this.setState({
              value: ''
            })
          }}>
            <FormGroup>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="..."
                onChange={this.handleChange}
              />{' '}
              <Button type="submit">Send</Button>
            </FormGroup>
          </Form>
        </Row>
      </div>
    )
  }
}
