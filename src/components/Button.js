import React, { Component } from 'react';
import './style.css';

class Button extends Component {
    render() {
        let { flag, task, title } = this.props;
        return (
            <button
                className={flag === "incrementCount" ? "btn-increment" : "btn-decrement"}
                onClick={task}>
                {title}
            </button>
        );
    }
}


export default Button;