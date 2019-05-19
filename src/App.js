import React, {Component} from 'react';
import './App.css';
import Expense from './components/Expense';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Expense/>
      </div>
    );
  }
}

export default App;
