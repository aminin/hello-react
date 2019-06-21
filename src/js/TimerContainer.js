import React from 'react';
import Button from './LikeButtonClassComponent';
import Timer from './Timer';

class TimerContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timerIsOn: false,
            shouldUpdateNode: true
        };
    }

    render() {
        let timerIsOn = !!(this.state || {}).timerIsOn;
        let shouldUpdateNode = !!(this.state || {}).shouldUpdateNode;
        return timerIsOn ? <div>
            <button className={`btn btn-danger`} onClick={() => this.setState({ timerIsOn: false })}
            >
                Выкл
            </button>
            &nbsp;
            <button className={`btn btn-${shouldUpdateNode ? 'warning' : 'primary'}`} onClick={() => this.setState({ timerIsOn: true, shouldUpdateNode: !shouldUpdateNode })}
            >
                Обновлять счётчик?
            </button>
            <Timer shouldUpdateNode={shouldUpdateNode} />
        </div> : <div>
            <button className={`btn btn-success`} onClick={() => this.setState({ timerIsOn: true, shouldUpdateNode: shouldUpdateNode })}
            >
                Вкл
            </button>
        </div>;
    }
}

export default TimerContainer;
