import React from 'react';
import { Form, FormGroup, FormControl, Col, Button } from 'react-bootstrap';

export default class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    return(
      <Col smOffset={4} sm={4}>
        <Form inline>
          <FormGroup controlId="formInlineName">
            <h2>Please choose a username</h2>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="username"
              onChange={this.handleChange}
            />{' '}
            <Button>Submit</Button>
          </FormGroup>
        </Form>
      </Col>
    )
  }
}
