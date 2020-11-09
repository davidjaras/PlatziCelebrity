import React, { useState } from 'react';

import './styles/Register.scss'

const Register = ({ handleRegister }) => {

    const [ first_name, setFirstName ] = useState('')
    const [ last_name, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')



    return(
        <div className="reg">
            <p>Registro</p>
                 <form >
                     <div className="reg__fullName">
                        <div className="reg__first-name form-group">
                            <label>Nombre</label>
                            <input onChange={e => setFirstName(e.target.value)} 
                                placeholder="Jhon"
                                value={first_name} />
                        </div>
                        <div className = "reg__last-name form-group">
                            <label>Apellido</label>
                            <input onChange={e => setLastName(e.target.value)} 
                                placeholder="Doe"
                                value={last_name} />
                        </div>
                     </div>
                     <div className = "reg__email form-group">
                        <label>Email</label>
                        <input onChange={e => setEmail(e.target.value)} 
                            type="email"
                            placeholder="jhondoe@abc.com"
                            value={email} />
                     </div>
                     <div className = "reg__password form-group">
                        <label>Password</label>
                        <input onChange={e => setPassword(e.target.value)} 
                            type="password"
                            placeholder="****"
                            value={password} />
                     </div>
                     <input onClick = {e => handleRegister(
                         {
                            first_name,
                            last_name,
                            email,
                            password
                         }
                     )} className="input__boton" type="button" name="enviar" value="Registrarse" id="register"/>
                 </form>
        </div>
    )
}

export default Register;