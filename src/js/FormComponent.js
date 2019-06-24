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

        let buttons = null;
        let timer = null;

        // Условный рендеринг
        if (timerIsOn) {
            buttons = (
                <React.Fragment>
                    <button className={`btn btn-danger`} onClick={() => this.setState({timerIsOn: false})}
                    >
                        Выкл
                    </button>
                    &nbsp;
                    <button className={`btn btn-${shouldUpdateNode ? 'warning' : 'primary'}`}
                            onClick={() => this.setState({timerIsOn: true, shouldUpdateNode: !shouldUpdateNode})}
                    >
                        Обновлять счётчик?
                    </button>
                </React.Fragment>
            );
            timer = <Timer shouldUpdateNode={shouldUpdateNode}/>;
        } else {
            buttons = <button className={`btn btn-success`}
                        onClick={() => this.setState({timerIsOn: true, shouldUpdateNode: shouldUpdateNode})}
                >
                    Вкл
                </button>;
        }
        return <div>
            {buttons}
            {timer}
        </div>;
    }
}

export default TimerContainer;
