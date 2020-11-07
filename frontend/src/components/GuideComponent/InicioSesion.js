import React from 'react';
import './styles/input.css';


 class InicioSesion extends React.Component{
     render(){
         return(  
             <div className = "container__input">
                 <p>Inicio de sesión</p>
                 <form action="">
                     <div>
                        <input className = "input__correo" type="email" placeholder ='correo eletronico' name="" />
                        <input className = "input__contraseña" placeholder = 'contraseña' type="text" name="" id=""/>
                     </div>
                     <input className = "input__boton" type="submit" name="enviar" value="Iniciar sesion" id=""/>
                 </form>
                 <p className = "container__input-parafo">
                     <a href=""> ¿Olvidó su contraseña? </a>
                 </p>
             </div>
         )
     }
 }

 export default InicioSesion;