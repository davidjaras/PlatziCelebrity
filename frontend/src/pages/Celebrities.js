import React from 'react';
import './styles/Celebrities.scss';
import CelebrityContainer from '../components/CelebrityContainer';
import ShowMore from '../components/ShowMore';
import CelebritiesMock from '../mockData/celebrities.json';

const Celebrities = () => {

   

// (async function(){
//     let hello = await getCountryAsync()
//     console.log("log => ", hello)
// })()  

    return (
        <div className="celebrities">
            <h1 className="celebrities__title">Celebridades</h1>
            <div className="celebrities__content">
                {CelebritiesMock.map((item, index) => {
                    return (
                        <CelebrityContainer
                            key={ index }
                            urlImage={item.urlImage}
                            name={item.name}
                            buttonType={item.buttonType}
                            buttonContent={item.buttonContent} />
                    )
                })}
            </div>
            <ShowMore more="Celebridades" />
        </div>
    )
}

export default Celebrities
