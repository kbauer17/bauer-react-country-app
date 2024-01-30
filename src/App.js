// Respository:  bauer-react-country-app
// Author:  Kathy Bauer
// Version: 1.0
import React, {Component} from 'react';
import './App.css';
import Country from './components/Country';

class App extends Component {
  state = {
    countriesImmutable: [
      { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 10 },
      { id: 2, name: 'China', gold: 3, silver: 3, bronze: 9 },
      { id: 3, name: 'Germany', gold: 0, silver: 3, bronze:14 },
    ]
  }
  
handleIncrement = (countryId) => {
  const countriesMutable = [...this.state.countriesImmutable];
  const idx = countriesMutable.findIndex( (c) => c.id === countryId);
  countriesMutable[idx].gold += 1;
  this.setState( { countries:countriesMutable } );
}

handleDecrement = (countryId) => {
  const countriesMutable = [...this.state.countriesImmutable];
  const idx = countriesMutable.findIndex( (c) => c.id === countryId);
  if (countriesMutable[idx].gold <= 0) {
    countriesMutable[idx].gold = 0;
  } else {
    countriesMutable[idx].gold -= 1;
  }
  this.setState( { countries:countriesMutable } );
}

  render(){
    return (
      <div className="App">
        <h2>Olympic Medals</h2>
        { this.state.countriesImmutable.map(country =>
          <Country
            key={country.id}
            onIncrement = { this.handleIncrement }
            onDecrement = { this.handleDecrement }
            country = { country }
          />
        )}
      </div>
    );
  }
}

export default App;
