import React, {Component} from "react";

function Medal(props) {

    
        
        return (
            <div className='gold'> Gold medals:  { props.gold }
            {/* <div className='btn-group px-3' role='group'>
                <button type='button' onClick={ () => onIncrement(country.id) } className='btn btn-primary btn-sm'> + </button>
                <button type='button' onClick={ () => onDecrement(country.id) } className='btn btn-primary btn-sm'> - </button>
            </div>  */}
        </div>
        )
    

}

export default Medal;