import React, { Component } from 'react';
import Medal from './Medal';


class Country extends Component {
  
    render(){
        const {onIncrement, onDecrement, country} = this.props;
        return (
            <div className='container-fluid'>
                <div className='name py-3'> { country.name } </div>
                <div className='gold'> {Medal(country.gold)} </div>
                {/* <div className='gold'> Gold medals:  { country.gold }
                    <div className='btn-group px-3' role='group'>
                        <button type='button' onClick={ () => onIncrement(country.id) } className='btn btn-primary btn-sm'> + </button>
                        <button type='button' onClick={ () => onDecrement(country.id) } className='btn btn-primary btn-sm'> - </button>
                    </div> 
                </div> */}
            </div>
            
        )
    }
}

export default Country;