import React from 'react';
import Button from './LikeButtonClassComponent';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.timerID = null;
        this.state = {
            date: new Date(),
            // Обновлять узел DOM при обновлении состояния?
            shouldUpdateNode: true
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.shouldUpdateNode !== undefined) {
            state.shouldUpdateNode = !!props.shouldUpdateNode;
        }
        console.log('Timer.getDerivedStateFromProps', state, props);
        return state;
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log('Timer.componentWillUnmount', this.timerID);
        clearInterval(this.timerID);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.shouldUpdateNode;
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        console.log('Timer state', this.state);
        return <p>Сейчас {this.state.date.toLocaleTimeString()}.</p>;
    }
}

export default Timer;
