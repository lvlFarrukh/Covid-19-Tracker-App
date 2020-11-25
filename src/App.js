import React from 'react';
import './App.css';

// import component
import Header from './components/Header'
import MainGrid from './components/MainGrid'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header/>
        <MainGrid/>
      </div>
    )
  }  
}

export default App;

