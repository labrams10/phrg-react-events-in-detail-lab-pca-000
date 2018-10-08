import React from 'react'

export default class CoordinatesButton extends React.Component {
 
    click = (event) => {
      this.props.onReceiveCoordinates([event.pageX, event.pageY]);
    }
   
    render() {
      return (
        <div><button onClick={this.click}>Click me!</button></div>
      );
    }
  }