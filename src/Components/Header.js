import React, { Component } from 'react';
    
const divStyle = {
    backgroundColor: '#6aa84f',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontSize: '36px',
    outline: '1px solid black',
    marginBottom: '10px'
};

class Header extends Component {
    render() {
        return <div style={ divStyle }>Header</div>;
    }
}
    
export default Header;