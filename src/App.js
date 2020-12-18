import React, { Component } from 'react';

class App extends component {
  
  render() {
    constructor(props){
      super(props);

      this.state={
        newItem="";
        list: [];
      }
    }
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

        </div>
      </div>
    );
  },
}

export default App;
