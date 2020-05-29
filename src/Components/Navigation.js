import React, { Component } from 'react';

const divStyle = {
    backgroundColor: '#6fa8dc',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontStyle: 'bold',
    outline: '1px solid black',
    display: 'block',
    width: '200px',
    marginRight: '10px',
    gridColumnStart: '1',
    gridColumnEnd: '3'
  };
    
class Navigation extends Component {
    render() {
        return <div style={divStyle}>Navigation</div>;
    }
}
    
export default Navigation;