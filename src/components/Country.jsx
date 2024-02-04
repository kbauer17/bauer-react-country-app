import React, { Component } from 'react';
import Medal from './Medal';


class Country extends Component {
  
    render(){
        const {onIncrement, onDecrement, country, deleteCountry} = this.props;
        const medalTypes = [{type: 'gold'}, {type: 'silver'}, {type: 'bronze'}];
        const countryTotalMedals = country.gold + country.silver + country.bronze;
        
        return (
            <div className='container-fluid'>
                <div className='name py-3'> { country.name }:  {countryTotalMedals}</div>
                   {medalTypes.map( (e)=>{
                        return (
                            <Medal 
                                onDecrement={onDecrement}
                                onIncrement={onIncrement}
                                country={country}
                                type={e.type}/>
                        )
                    } )}
                    <div className='py-2'>
                        <button type='button' onClick={ () => deleteCountry(country.id) } className='btn btn-primary btn-sm'> Delete Country </button>
                    </div>
            </div>
        )
    }
}

export default Country;