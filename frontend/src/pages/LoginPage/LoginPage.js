import React from 'react';
import logo from '../../components/GuideComponent/imagen/logobl.png';
import '../../components/GuideComponent/styles/containerLogo.css';
import Botontwitter from '../../components/GuideComponent/Botontwitter';
import Botongoogle from '../../components/GuideComponent/Botongoogle';
import Terminos from '../../components/GuideComponent/Terminos';
import InicioSesion from '../../components/GuideComponent/InicioSesion';

const LoginPage = () => {
    return (
        <div className = "container__logo">
           <div className = "container__logo-people">
              <img src={logo} alt="logo principal"/>
                
                 <p> Este espacio esta reservado para alguna 
                     frase que aun no se pero esta aqui. </p>
           </div>
           <div className = "container__componentes">
              <div  className = "container__componentes-botones" >
                  <Botontwitter />    
                  <Botongoogle /> 
                  <Terminos />
              </div>
              <div className = "container__componente-login">
                   <InicioSesion />           
              </div>
           </div>
              <footer className = "container__footer">
                 <p>Esta es otra espacio que creo que va 
                    alguna publicidad estonces queda reservado.</p>
             </footer>
        </div>
    )
}

export default LoginPage;
