import React, { Component } from 'react';
import Ninjas from './Ninjas';



class App extends Component  {

  state = {
    ninjas : [
      {name: 'Hex' , age:35 , belt:'black', id:1},
      {name: 'Hec' , age:25 , belt:'yellow', id:2},
      {name: 'Hat' , age:55 , belt:'red', id:3}
    ]
  }

  render(){
  return (
    <div className="App">
    <h1>My first React App!</h1>
    <p> Lets Begin! </p>
    <Ninjas ninjas={this.state.ninjas} />
    </div>
  );
}
}

export default App;
