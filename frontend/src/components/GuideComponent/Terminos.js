import React from 'react';
import './styles/termino.css';


class Terminos extends React.Component{
    render(){
        return(
            <div className = "container__terminos">
              <p><a href="#">Registrar con correo electronico</a> al continuar <br/>
              indicas que has leido y aceptas las <a href="#">  
              condiciones <br/> de servicio </a>
              y la   <a href="#">política de privacidad </a> de <br/>  peoplenew.</p>
            </div>
        )
    }
}

export default Terminos;