import React from 'react';
import './App.css';
import InputBox from './components/InputBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  newItem(value) {
    console.log(value);
  }
  render() {
    return (
      <InputBox click={this.newItem} />
 
    );
  }

}

export default App;