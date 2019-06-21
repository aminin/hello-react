import React from 'react';
import ReactDOM from 'react-dom';

import Timer from './Timer';
import TimerContainer from './TimerContainer';


import LikeButton from './LikeButton';

import LikeButtonJSX from './LikeButtonJSX';
import LikeButtonComponent from './LikeButtonComponent';
import LikeButtonClassComponent from "./LikeButtonClassComponent";

const domContainer = document.querySelector('#app_container');
// Один и тот же элемент может быть создан через React.createElement
//ReactDOM.render(LikeButton, domContainer);
// через JSX
ReactDOM.render(LikeButtonJSX, domContainer);
// через компонент
//ReactDOM.render(<LikeButtonComponent btnStyle='success' />, domContainer);
//ReactDOM.render(<LikeButtonClassComponent btnStyle='warning' />, domContainer);
//ReactDOM.render(<Timer />, domContainer);
//ReactDOM.render(<TimerContainer />, domContainer);
