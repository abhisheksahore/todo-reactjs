import React from 'react';
import './App.css';
import InputBox from './components/InputBox';
import ItemCard from './components/ItemCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(value) {
    // console.log(value);
    this.setState(pState=> {
      return {
        items: [...pState.items, {value: value, completed: false}]
      }
    }, ()=> {
      // console.log(this.state.items)
    })
  }

  render() {
    return (
      <div>
        <InputBox click={this.updateState} />
        {
          this.state.items.map(e=> {
            return <ItemCard item={e.value} completed={e.completed}/>
          })
        }
      </div>
    )
  }

}

export default App;