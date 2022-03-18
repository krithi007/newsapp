import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000)
    }

    tick() {
        this.setState({date : new Date()})
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="clock-container">
                <h4>
                    Current Time {this.state.date.toLocaleTimeString()}.
                </h4>
            </div>
        )
    } 
}

export default Clock;