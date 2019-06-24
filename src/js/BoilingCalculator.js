import React from 'react'
import BoilingVerdict from './BoilingVerdict'

const scaleNames = {
    c: 'Цельсия',
    f: 'Фаренгейта'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state = {temperature: ''};
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
        // this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.props.temperature;
        // const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class BoilingCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: ''
        };
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <fieldset>
                <TemperatureInput scale="c"
                                  temperature={celsius}
                                  onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f"
                                  temperature={fahrenheit}
                                  onTemperatureChange={this.handleFahrenheitChange}/>

                <BoilingVerdict
                    celsius={parseFloat(celsius)} />

            </fieldset>
        );
    }
}

export default BoilingCalculator;
