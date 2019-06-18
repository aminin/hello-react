import React from 'react';

export default React.createElement(
    'button',
    {
        onClick: () => this.setState({ liked: true }),
        className: 'btn btn-lg btn-primary btn-block'
    },
    'Нравится'
);
