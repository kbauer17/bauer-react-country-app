// Respository:  bauer-react-country-app
// Author:  Kathy Bauer
// Version: 1.0
import React, {Component} from 'react';
import './App.css';
import Country from './components/Country';
// import NewCountry from './components/NewCountry';
import NewCountryModal from './components/NewCountryModal';

class App extends Component {
  state = {
    countriesImmutable: [
      { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 10 },
      { id: 2, name: 'China', gold: 3, silver: 3, bronze: 9 },
      { id: 3, name: 'Germany', gold: 6, silver: 3, bronze:14 },
    ]
  }
  
handleIncrement = (countryId,type) => {
  const countriesMutable = [...this.state.countriesImmutable];
  const idx = countriesMutable.findIndex( (c) => c.id === countryId);
  countriesMutable[idx][type] += 1;
  this.setState( { countries:countriesMutable } );
}

handleDecrement = (countryId, type) => {
  const countriesMutable = [...this.state.countriesImmutable];
  const idx = countriesMutable.findIndex( (c) => c.id === countryId);
  if (countriesMutable[idx][type] <= 0) {
    countriesMutable[idx][type] = 0;
  } else {
    countriesMutable[idx][type] -= 1;
  }
  this.setState( { countries:countriesMutable } );
}

getTotalMedalCount = () => {
  const golds = this.state.countriesImmutable.reduce( (a,b) => a + b.gold, 0);
  const silvers = this.state.countriesImmutable.reduce( (a,b) => a + b.silver, 0);
  const bronzes = this.state.countriesImmutable.reduce( (a,b) => a + b.bronze, 0);
  return golds + silvers + bronzes;
}

removeCountry = (countryId) => {
  const countries = this.state.countriesImmutable.filter(c => c.id !==countryId);
  this.setState( { countriesImmutable:countries});
}

addCountry = (name) => {
  const { countriesImmutable } = this.state;

  //set an id for the new country
  const id = countriesImmutable.length === 0 ? 1 : Math.max(...countriesImmutable.map(name => name.id)) +1;

  // add the new country to a mutable array
  const countriesMutable = countriesImmutable.concat( { id: id, name: name,gold: 0, silver: 0, bronze: 0});

  // change state by setting the state immutable array equal to the mutable array
  this.setState( {countriesImmutable:countriesMutable} );

}

  render(){
    return (
      <div className="App">
        <h2 className='App-header py-3'>Olympic Medals:  {this.getTotalMedalCount()}</h2>
        { this.state.countriesImmutable.map(country =>
          <Country
            key={country.id}
            onIncrement = { this.handleIncrement }
            onDecrement = { this.handleDecrement }
            deleteCountry = {this.removeCountry}
            country = { country }
          />
        )}
        {/* <NewCountry onAdd={ this.addCountry }/> */}
        <NewCountryModal onAdd={this.addCountry}/>
      </div>
    );
  }
}

export default App;
