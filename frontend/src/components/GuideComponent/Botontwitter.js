import React from 'react';
import twitter from './imagen/twitter.png';
import './styles/botontwitter.css';



class Botontwitter extends React.Component{
    render(){
        return (
            <div> 
               <div className = 'container__boton-twitter'>             
                 <button className = 'boton__twitter'>
                    <img src={twitter} alt=""/>
                      <a href="">
                        <p>Seguir con Twitter </p> 
                      </a> 
                </button>  
             </div>
          </div>
        )
    }
}

export default Botontwitter;