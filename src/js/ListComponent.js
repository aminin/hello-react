import React from 'react';
import Button from './LikeButtonClassComponent';
import Timer from './Timer';

function ListComponent (props) {

    let numbers = [1, 2, 3, 4, 5];

    return <ul>
        {
            numbers.map((number) => {
                <li>{{number}}</li>
            })
        }
    </ul>;

}

export default ListComponent;
