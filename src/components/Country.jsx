import React, { Component } from 'react';

class Country extends Component {
    state = {
        name: 'Mexico',
        gold: 0,
    }

    render(){
        return (
            <div>{ this.state.name }</div>
        )
    }
}

export default Country;