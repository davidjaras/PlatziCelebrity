import React from 'react'
import Button from '../../components/Button'
import ShowMore from '../../components/ShowMore'

import './styles/Celebrities.scss'

const Celebrities = () => {
    return (
        <div className="celebrities">
            <h1>Soy las celebridades</h1>
            <Button type="default" content="Follow" />
            <Button type="danger" content="Unfollow" />
            <ShowMore more="Celebridades" />
        </div>
    )
}

export default Celebrities
