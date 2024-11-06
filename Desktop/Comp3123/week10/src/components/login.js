import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',  
            lastname: '',
            city: '',
            country: ''  // Add country to state
        };
        this.countries = ['Canada', 'USA', 'Japan'];
    }

    handleClick = (e) => {
        e.preventDefault();
        alert(`Hello: ${this.state.firstname} ${this.state.lastname}`);
    };

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
        console.log(`${name}: ${value}`);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    First Name:
                    <input
                        type="text"
                        name="firstname"
                        onChange={this.handleInput}
                        value={this.state.firstname}
                        placeholder="Enter first name"
                    /><br/>
                    Last Name:
                    <input
                        type="text"
                        name="lastname"
                        onChange={this.handleInput}
                        value={this.state.lastname}
                        placeholder="Enter last name"
                    /><br/>
                    Country:
                    <select name='country' onChange={this.handleInput} value={this.state.country}>
                        <option value="">Select a country</option>
                        {this.countries.map((cnm) => (
                            <option key={cnm} value={cnm}>{cnm}</option>
                        ))}
                    </select>
                    <br/>
                    City:
                    <select name='city' onChange={this.handleInput} value={this.state.city}>
                        <option value="Tor">Toronto</option>
                        <option value="Ny">New York</option>
                        <option value="Tok">Tokyo</option>
                    </select>
                    <br/>
                    <input type="submit" value="Login" />
                </form>

                <button value="Test" name="btnSubmit" onClick={this.handleClick}>Submit</button>
                <p>{this.state.firstname} {this.state.lastname}</p> 
                <p>{JSON.stringify(this.state)}</p>
            </div>
        );
    }
}


