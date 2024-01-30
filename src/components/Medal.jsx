import React, { Component } from 'react';

class Medal extends Component {
    render(){
        const {onDecrement, onIncrement, country, type} = this.props;
    
            
        return (
            <div className={type}> {type} medals:  { country[type] }
            <div className='btn-group px-3' role='group'>
                <button type='button' onClick={ () => onIncrement(country.id) } className='btn btn-primary btn-sm'> + </button>
                <button type='button' onClick={ () => onDecrement(country.id) } className='btn btn-primary btn-sm'> - </button>
            </div> 
        </div>
        )
    
    }

}

export default Medal;