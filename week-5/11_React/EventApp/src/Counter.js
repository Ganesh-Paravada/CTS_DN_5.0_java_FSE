import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    sayHello = () => {
        alert("Hello! This is a static message.");
    }

    sayWelcome = (msg) => {
        alert(msg);
    }

    handleClick = () => {
        alert("I was clicked");
    }

    incrementAndHello = () => {
        this.increment();
        this.sayHello();
    }

    render() {

        return (

            <div>

                <h2>Counter : {this.state.count}</h2>

                <button onClick={this.incrementAndHello}>
                    Increment
                </button>

                &nbsp;

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br /><br />

                <button onClick={() => this.sayWelcome("Welcome")}>
                    Say Welcome
                </button>

                <br /><br />

                <button onClick={this.handleClick}>
                    Click Me
                </button>

            </div>

        );
    }
}

export default Counter;