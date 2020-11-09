import React from 'react';

import './styles/CelebrityContainer.scss';

import ImageName from './ImageName'
import Button from './Button';

function CelebrityContainer ({ urlImage, name, buttonType, buttonContent }) {
    return (
        <div className="celebrity-container">
            <ImageName
                urlImage={ urlImage}
                name={ name } />
            <Button
                type={buttonType}
                content={buttonContent} />
        </div>
    )
}

export default CelebrityContainer;