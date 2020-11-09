import React from 'react';

import './styles/Button.scss'

function Button({ type, content }) {
    return (
        <>
            <button className={`button ${type === 'default' ? "default" : "danger"}`} type="button">{ content }</button>
        </>
    )
}

export default Button;