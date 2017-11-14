import React, {Component} from 'react';
import './App.css';
const INTERVAL = 90;

class Kamin extends React.Component {
    constructor(props) {
        super(props);
        this.onSetFire = this
            .onSetFire
            .bind(this);
        this.onSnuffOut = this
            .onSnuffOut
            .bind(this);
        this.state = {
            isBurning: false
        };
    }

    onSetFire() {
        this.setState({isBurning: true});
    }

    onSnuffOut() {
        this.setState({isBurning: false});
    }

    render() {
        const isBurning = this.state.isBurning;

        let button = null;
        if (isBurning) {
            button = <SnuffOutButton onClick={this.onSnuffOut}/>
        } else {
            button = <SetFireButton onClick={this.onSetFire}/>;
        }
        return (
            <div>
                {button}
                <Indicator isBurning={isBurning}/>
            </div>
        );
    }

}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    increment() {
        this.setState({
            value: this.state.value + 1
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.increment(), 1000 / INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const value = this.state.value
        return (
            <span>
                <span>{Math.round(value / INTERVAL / 60 / 60)}
                    :
                </span>
                <span>{Math.round(value / INTERVAL / 60)}
                    :
                </span>
                <span>{Math.round(value / INTERVAL)}
                    .
                </span>
                <span>{value % INTERVAL}</span>
            </span>
        );
    }
}

function Indicator(props) {
    return (props.isBurning && <div>Камин горит:
        <Timer/></div> || <div>Камин не горит...</div>);
}

function SetFireButton(props) {
    return (

        <button className="orange" onClick={props.onClick}>Зажечь</button>

    );
}

function SnuffOutButton(props) {
    return (

        <button className="blue" onClick={props.onClick}>Потушить</button>
    );
}

function Application() {
    return (
        <p>
            <Kamin/>
        </p>
    );
}

export default Application;