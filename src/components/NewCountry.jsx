import React, { Component } from "react";

class NewCountry extends Component{
    state = {
        name: '',
        showForm: false,
    }

    toggleForm = () => {
        const {showForm} = this.state;
        this.setState( { showForm : !showForm});
        if(showForm){
            this.setState( { name: ''});
        }
    }

    handleChange = (e) => this.setState(  { [e.target.name]: e.target.value } );

    saveCountry = () => {
        const { name } = this.state;
        this.props.onAdd(name);
        this.toggleForm();
    }

    render(){
        const { showForm, name } = this.state;

        return (
            <div className="New-country">
            {
                ( showForm ) ?
                <form>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={ this.handleChange}
                        placeholder="Enter Country Name"
                        autofocus
                        autoComplete="off"
                    />
                    <button
                        disabled={ name.trim().length === 0}
                        type="button"
                        onClick={this.saveCountry}
                        >Add Country</button>
                    <button
                        type="button"
                        onClick={this.toggleForm}
                        >Cancel</button>
                </form>
                :
                <span className="Toggle-form btn btn-primary my-1" onClick={this.toggleForm}
                >Add a Country</span>
            }
            </div>
        )
    }
}

export default NewCountry;