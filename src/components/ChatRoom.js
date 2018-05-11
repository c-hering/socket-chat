import React from 'react';
import { Panel, Form, FormGroup, FormControl, Col, Row, Button } from 'react-bootstrap';

export default class ChatRoom extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    const messages = this.state.messages.length === 0 ? '' : this.state.messages.map(msg => <h4 style={{float: 'left'}}>{msg}</h4>)
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
          <Form inline onSubmit={() => console.log("asdf")}>
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
