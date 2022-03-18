import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            isLoggedIn : false
        });
        this.isLoggedIn = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        this.setState(state => ({
            isLoggedIn : !state.isLoggedIn 
        }));
    }
    render() {
        const isLogged = this.state.isLoggedIn;
        let button;
        if(isLogged) {
            button = <LogoutButton onClick={this.isLoggedIn}/>
        } else {
            button = <LoginButton onClick={this.isLoggedIn}/>
        }
        return (
           <div>
               {button}
           </div>
        )
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Logout </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}