import React from 'react';

function LikeButtonComponent(props) {
    let btnStyle = props.btnStyle || 'primary';
    //console.log(this.state);
    return <button
        //onClick={() => this.setState({ liked: true })}
        className={`btn btn-lg btn-${btnStyle} btn-block`}
    >
        Нравится
    </button>;
}

export default LikeButtonComponent;
