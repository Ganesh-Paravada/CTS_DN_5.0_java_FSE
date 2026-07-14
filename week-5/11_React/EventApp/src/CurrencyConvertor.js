import React, { Component } from "react";

class CurrencyConvertor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rupees: "",
            euro: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            rupees: event.target.value
        });
    }

    handleSubmit = () => {

        const euro = this.state.rupees / 90;

        this.setState({
            euro: euro.toFixed(2)
        });

        alert("Converting into Euro,Amount is : " + euro.toFixed(2)+" Euro's");
    }

    render() {

        return (

            <div>

                <h2 style={{ color: "green" }}>
                    Currency Convertor
                </h2>

                <input
                    type="number"
                    placeholder="Enter Rupees"
                    onChange={this.handleChange}
                />

                <br /><br />

                <button onClick={this.handleSubmit}>
                    Convert
                </button>

            </div>

        );
    }
}

export default CurrencyConvertor;