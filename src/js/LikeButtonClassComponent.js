import React from 'react';

// Если кликнуть по кнопке, то она поменяет цвет
class LikeButtonClassComponent extends React.Component {
    render() {
        let btnStyle = this.props.btnStyle || 'primary';
        // Оператор !! превращает null и undefined в false (поэкспериментируйте в отлодочной консоли браузера)
        // Если this.state = null, то выражение (this.state || {}) даст нам пустой объект
        //     null.liked — ошибка
        //     {}.liked — undefined
        let liked = !!(this.state || {}).liked;
        btnStyle = liked ? 'success' : btnStyle;
        return <button
            onClick={() => this.setState({ liked: !liked })}
            className={`btn btn-lg btn-${btnStyle} btn-block`}
        >
            Нравится
        </button>;
    }
}

export default LikeButtonClassComponent;
