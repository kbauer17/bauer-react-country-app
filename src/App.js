// Respository:  bauer-react-country-app
// Author:  Kathy Bauer
// Version: 1.0
import React, {Component} from 'react';
import './App.css';
import Country from './components/Country';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2 },
      { id: 2, name: 'China', gold: 3 },
      { id: 3, name: 'Germany', gold: 0 },
    ]
  }

  render(){
    return (
      <div className="App">
        { this.state.countries.map(country =>
          <Country
            key={country.id}
            country = { country }
          />
        )}
      </div>
    );
  }
}

export default App;
