import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';

const divStyle = {
  backgroundColor: '#dddddd',
  margin: '10px',
  outline: '1px solid black',
  padding: '10px'
};
const gridContainer ={
    display: 'grid',
    gridColumnGap: '10px',
    gridRowGap: '10px'
};

function App() {
  return (
    <div style={ divStyle }>
        <Header/>
        <div style={ gridContainer }>
            <Navigation />
          <Main />
        </div>
    </div>
  );
}
                
export default App;