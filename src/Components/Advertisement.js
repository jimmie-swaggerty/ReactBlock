import React, { Component } from 'react';

const divStyle = {
    backgroundColor: '#b4a7d6',
    outline: '1px solid black',
    display: 'inline-block',
    padding: '30px',
    margin: '20px',
    width: '490px'
  };
    
class Advertisement extends Component {
    render() {
        return <div style={divStyle}>Advertisement</div>;
    }
}
    
export default Advertisement;
