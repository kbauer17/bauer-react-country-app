import React, { Component } from 'react';
import Medal from './Medal';


class Country extends Component {
  
    render(){
        const {onIncrement, onDecrement, country} = this.props;
        const medalTypes = [{type: 'gold'}, {type: 'silver'}, {type: 'bronze'}];
        
        return (
            <div className='container-fluid'>
                <div className='name py-3'> { country.name } </div>
                   {medalTypes.map( (e)=>{
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