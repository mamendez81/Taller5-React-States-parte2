import React from "react";
import Form from "./Form";
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

  addCharacter = character => {
    this.setState({
      characters: [...this.state.characters, character],
    });
  }

  render(){
    const { characters } = this.state;
    return (
      <div className="container">
        <Table 
        characters={characters}
        removeCharacter={this.removeCharacter}/>
        <Form addCharacter={this.addCharacter}/>
      </div>
    );
  }

}



  export default App;