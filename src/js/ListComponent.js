import React from 'react';
import Button from './LikeButtonClassComponent';
import Timer from './Timer';

function ListItem(props) {
    const value = props.value;

    return <li>{value}</li>;
}

function ListComponent(props) {

    const numbers = props.numbers || [];
    // const elements = numbers.map((number) => {
    //     return <ListItem key={'_' + number}>{number}</ListItem>;
    // });

    return <ul>{numbers.map((number) => {
        return <ListItem key={'_' + number} value={number} />
    })}</ul>;

}

export default ListComponent;
