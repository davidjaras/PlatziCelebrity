import React from 'react';
import './styles/input.css';



 class InicioSesion extends React.Component{
     state = {}
     handlechange = (e)=>{
         console.log({
             name:e.target.name,
             valeu:e.target.value})
     }
     handleClick = (e)=>{
         console.log('this was click')
         console.log(this.state)


     }
     render(){
         return(  
             <div className = "container__input">
                 <p>Inicio de sesión</p>
                 <form >
                     <div>
                        <input onChange = {this.handlechange} 
                         className = "input__correo" 
                         type="email" 
                         placeholder ='correo eletronico' 
                         name="email"
                         value = {this.state.email} />
                         
                        <input onChange = {this.handlechange} 
                        className = "input__contraseña"
                         placeholder = 'contraseña' 
                         type="password"
                         name="password" 
                         value = {this.state.password} />
                         
                     </div>
                     <input onClick = {this.handleClick} className = "input__boton" type="button" name="enviar" value="Iniciar sesion" id=""/>
                 </form>
                 <p className = "container__input-parafo">
                     <a href=''> ¿Olvidó su contraseña? </a>
                 </p>
             </div>
         )
     }
 }

 export default InicioSesion;