import React, { Component } from "react";
//import logo from "./logo.svg";
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''

    };
    //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    //.then(users=>console.log(users))
    .then(users=>this.setState({monsters:users}))
  }

  handleChange = (e) => {
    
        this.setState({ searchField: e.target.value })
  }
  //onChange={e=>console.log(e.target.value)} />
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters  = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
     <h1>Monster Rolodex</h1>
     
       <SearchBox 
       placeholder='search monsters'
       handleChange={this.handleChange}
       
       />
      <CardList monsters={filteredMonsters} />
      
      </div>
    );
  }
}

// <input type='search' placeholder='search monsters' 
// onChange={e=> 
//   this.setState({ searchField: e.target.value })}
//  />

//<CardList monsters={this.state.monsters}>
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
// This is a simple app
// </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
