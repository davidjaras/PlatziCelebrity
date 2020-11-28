<<<<<<< HEAD:frontend/src/components/ImageName/ImageName.js
import React from 'react';

import './ImageName.scss';

const ImageName = ({ urlImage, name }) => {
    return (
        <div className="image-name">
            <img className="image-name__pic" src={urlImage} alt="Profile Pic" />
            <span className="image-name__text">{ name }</span>
        </div>
    )
}

export default ImageName
=======
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
>>>>>>> 4d687fc07faef7c591c8501ac5bf844bacfebf6e:frontend/src/components/ImageName.js
