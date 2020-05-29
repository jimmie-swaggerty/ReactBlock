import React, { Component } from 'react';
import SubContents from './SubContents';
import Advertisement from './Advertisement';

const divStyle = {
    backgroundColor: '#e06666',
    color: 'white',
    padding: '10px',
    marginBottom: '10px',
    textAlign: 'center',
    alignContent: 'center',
    fontStyle: 'bold',
    outline: '1px solid black',
    display: 'inline-flex',
    gridColumnStart: '3',
    gridColumnEnd: '6',
  };
    
class Main extends Component {
    render() {
        return <div style= { divStyle }>
            Main
            <p>
            <SubContents word="Item1"/>
            <SubContents word="Item2"/>
            <SubContents word="Item3"/>
            <Advertisement />
            </p>
            </div>
    }
}
    
export default Main;