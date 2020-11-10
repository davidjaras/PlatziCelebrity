import React from 'react';

import './styles/ShowMore.scss';

function ShowMore({ more }) {
    return (
        <>
            <button className="show-more" type="button">Mas { more }</button>
        </>
    )
}

export default ShowMore;