import React, { useState } from 'react';
import './styles/input.css';

const InicioSesion = ({ handleLogin }) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return(  
        <div className = "container__input">
            <p>Inicio de sesión</p>
            <form >
                <div>
                   <input onChange={e => setEmail(e.target.value)} 
                    className = "input__correo" 
                    type="email" 
                    placeholder ='correo eletronico' 
                    name="email"
                    value={ email } />
                    
                   <input onChange = {e => setPassword(e.target.value)} 
                   className = "input__contraseña"
                    placeholder = 'contraseña' 
                    type="password"
                    name="password" 
                    value = { password } />
                    
                </div>
                <input onClick={e => handleLogin({
                    email,
                    password
                })} className = "input__boton" type="button" name="enviar" value="Iniciar sesion" id=""/>
            </form>
        </div>
    )
}

 export default InicioSesion;