import React, { Component } from 'react';
import Medal from './Medal';


class Country extends Component {
  
    render(){
        const {onIncrement, onDecrement, country} = this.props;
        const medalTypes = [{type: 'gold'}, {type: 'silver'}, {type: 'bronze'}];
        console.log(medalTypes);
        return (
            <div className='container-fluid'>
                <div className='name py-3'> { country.name } </div>
                {/* <div className='gold'> {Medal(onDecrement,onIncrement, country)} </div> */}
                {medalTypes.map( (e)=>{
                    console.log(e.type);
                    return (
                        
                        <Medal 
                            onDecrement={onDecrement}
                            onIncrement={onIncrement}
                            country={country}
                            type={e.type}/>
                    )
                } )}
                
                
                
            </div>
            
        )
    }
}

export default Country;