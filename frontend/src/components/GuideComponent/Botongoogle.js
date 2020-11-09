import React, { Component } from "react";
import google from "./imagen/google.png";
import './styles/botongoogle.css';



class Botongoogle extends React.Component{
    render(){
        return (
            <div>
               <div > 
                  <button className ="boton__google">
                    <img src={google} alt=""/>
                        <a href="#">
                            <p>Seguir con Google </p> 
                        </a>
                  </button>  
               </div>
            </div>
        )
    }
}

export default Botongoogle;