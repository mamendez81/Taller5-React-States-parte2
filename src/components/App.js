import React from "react";
import Table from "./Table";

class App extends React.Component {
  state = {
    characters: [
      {
        name: 'John',
        job: 'Swithery'
      },
      {
        name: 'Clyde',
        job: 'Carpenter'
      },
      {
        name: 'Wanda',
        job: 'Enginer'
      },
      {
        name: 'Claudia',
        job: 'Manager'
      }
    ]
  };

  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((char, i) => {
        return i !== index;
      })
    });
  };

}



  export default App;