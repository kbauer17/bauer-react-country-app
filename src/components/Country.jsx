import React, { Component } from 'react';
import { Button } from '@mui/material'

class Country extends Component {
  
    render(){
        const {onIncrement, onDecrement, country} = this.props;
        return (
            <div className='container-fluid'>
                <div className='name py-3'> { country.name } </div>
                <div className='gold'> Gold medals:  { country.gold }
                    <div className='btn-group px-3' role='group'>
                        <Button onClick={ () => onIncrement(country.id) } variant="outlined" size="small"> + </Button>
                        <Button onClick={ () => onDecrement(country.id) } variant="outlined" size="small"> - </Button>
                    </div> 
                </div>
            </div>
            
        )
    }
}

export default Country;