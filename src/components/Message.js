import React from 'react';

export default class Message extends React.Component {
  render(){
    return(
      <div style={{float: 'left', margin: 5, width: '100%', height: 20}}>
        <h4 style={{float: 'left'}}>
          {this.props.messageText}
        </h4>
      </div>
    )
  }
}
