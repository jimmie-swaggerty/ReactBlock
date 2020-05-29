import React, { Component } from 'react';

const divStyle = {
    backgroundColor: '#ffd966',
    outline: '1px solid black',
    display: 'inline-block',
    width: '150px',
    margin: '10px',
    padding: '10px',
    height: '500px'
};

    
class SubContents extends Component {
    render() {
        return <div style={divStyle}>{this.props.word}</div>;
    }
}
    
export default SubContents;