import React, { component } from 'react';

class App extends component {
    constructor(props) {
      super(props);

      this.state={
        newItem:"",
        list: []
      }
    }

    addItem() {
      // create item with unique id
      const newItem={
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };

      // copy current list of items
      const list=[...this.state.list];

      // add new item to list
      list.push(newItem);
      
      // update state with new list and reset newItem input 
      this.setState({
        list,
        newItem:""
      });
    }
    render() {
      return(
        <div classname="App">
          <div>
             Add an Item...
             <br/>
             <input
              type="text"
              placeholder="Type item here..."
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
             />
              <button
              onclick={() => this.addItem()} 
              >
                Add
              </button>
          </div>
        </div>
    
    );
  }
}

export default App;
