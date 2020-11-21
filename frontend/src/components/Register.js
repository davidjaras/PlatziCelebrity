import React, { useState } from 'react';

import './styles/Register.css'

const Register = ({ handleRegister }) => {

    const [ first_name, setFirstName ] = useState('')
    const [ last_name, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')



    return(
        <div className="container__register">
            <p>Registro</p>
                 <form >
                     <div>
                        <div className="register__correo-last">
                            <div >
                            <input className="register__correo-name" onChange={e => setFirstName(e.target.value)} 
                                placeholder="Nombre"
                                value={first_name} />
                        </div>
                        <div>
                            <input className="register__correo-name apellido" onChange={e => setLastName(e.target.value)} 
                                placeholder="Apellido"
                                value={last_name} />
                        </div>
                           </div>
                     </div>
                     <div>
                        <input className="register__correo" onChange={e => setEmail(e.target.value)} 
                            type="email"
                            placeholder="Email"
                            value={email} />
                     </div>
                     <div>
                        <input className="register__contraseña" onChange={e => setPassword(e.target.value)} 
                            type="password"
                            placeholder="Contraseña"
                            value={password} />
                     </div>
                     <input onClick = {e => handleRegister(
                         {
                            first_name,
                            last_name,
                            email,
                            password
                         }
                     )} className="register__boton" type="button" name="enviar" value="Registrarse" id="register"/>
                 </form>
        </div>
    )
}

export default Register;