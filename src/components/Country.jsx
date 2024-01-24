import React, { Component } from 'react';
import { Button } from '@mui/material'

class Country extends Component {
    state = {
        name: 'United States',
        gold: 0,
    }

    handleIncrement = () => {
        this.setState({ gold: this.state.gold + 1 })
    };

    handleDecrement = () => {
        if (this.state.gold <= 0){
            this.setState({gold: 0})
        } else{
            this.setState({ gold: this.state.gold - 1 })
        }
    };
    
    render(){
        return (
            <div className='container'>
                <div className='name py-3'>{ this.state.name }</div>
                <div className='gold'> Gold medals:  { this.state.gold }
                    <div className='btn-group px-3' role='group'>
                        <Button onClick={ this.handleIncrement } variant="outlined" size="small"> + </Button>
                        <Button onClick={ this.handleDecrement } variant="outlined" size="small"> - </Button>
                    </div> 
                </div>
            </div>
            
        )
    }
}

export default Country;