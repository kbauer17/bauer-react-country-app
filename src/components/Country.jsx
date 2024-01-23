import React, { Component } from 'react';

class Country extends Component {
    state = {
        name: 'United States',
        gold: 0,
    }

    handleIncrement = () => {
        this.setState({ gold: this.state.gold + 1 })
    };

    handleDecrement = () => {
        this.setState({ gold: this.state.gold - 1 })
    };
    
    render(){
        return (
            <div>
                <div className='m-3'>{ this.state.name }</div>
                <span className='m-3'> Gold medals:  { this.state.gold }
                    <div className='btn-group px-3' role='group'>
                        <button onClick={ this.handleIncrement } className="btn btn-outline-primary btn-sm"> + </button>
                        <button onClick={ this.handleDecrement } className="btn btn-outline-primary btn-sm"> - </button>
                    </div> 
                    
                </span>
            </div>
            
        )
    }
}

export default Country;