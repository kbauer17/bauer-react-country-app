import React, { Component } from 'react';
import { Button } from '@mui/material'

class Country extends Component {

    // handleDecrement = () => {
    //     if (this.state.gold <= 0){
    //         this.setState({gold: 0})
    //     } else{
    //         this.setState({ gold: this.state.gold - 1 })
    //     }
    // };
    
    render(){
        const {onIncrement, country} = this.props;
        return (
            <div className='container-fluid'>
                <div className='name py-3'> { country.name } </div>
                <div className='gold'> Gold medals:  { country.gold }
                    <div className='btn-group px-3' role='group'>
                        <Button onClick={ () => onIncrement(country.id) } variant="outlined" size="small"> + </Button>
                        {/* <Button onClick={ this.handleDecrement } variant="outlined" size="small"> - </Button> */}
                    </div> 
                </div>
            </div>
            
        )
    }
}

export default Country;