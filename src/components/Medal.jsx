import React from "react";

function Medal( removeMedal,addMedal,country ) {

    
        
        return (
            <div className='gold'> Gold medals:  { country.gold }
            <div className='btn-group px-3' role='group'>
                <button type='button' onClick={ () => addMedal(country.id) } className='btn btn-primary btn-sm'> + </button>
                <button type='button' onClick={ () => removeMedal(country.id) } className='btn btn-primary btn-sm'> - </button>
            </div> 
        </div>
        )
    

}

export default Medal;