import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    login = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    logout = () => {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {

        let button;
        let page;

        if (this.state.isLoggedIn) {
            button = <Logout onClick={this.logout} />;
            page = <UserPage />;
        }
        else {
            button = <Login onClick={this.login} />;
            page = <GuestPage />;
        }

        return (
            <div>

                <h1>Ticket Booking App</h1>

                {button}

                <hr />

                {page}

            </div>
        );
    }
}

export default App;