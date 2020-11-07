import React from 'react';

import './styles/ImageName.scss';

const ImageName = ({ urlImage, name }) => {
    return (
        <div className="image-name">
            <img className="image-name__pic" src={urlImage} alt="Profile Pic" />
            <span className="image-name__text">{ name }</span>
        </div>
    )
}

export default ImageName
