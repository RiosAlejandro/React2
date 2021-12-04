import React, { Fragment } from 'react';
import './Formulario.css';
import Foto from './Foto';

const Formulario = () => {
    return ( 
        <div className="principal"> 
            <form>
            <div className="campoInput">
                <input 
                    placeholder="Nombre"
                />
            </div>
            <div className="campoInput">
                <input 
                    placeholder="Apellido"
                />
            </div>
            <div className="campoInput">
                <input 
                    placeholder="Nombre de usuario"
                />
            </div>
            <div className="campoInput">
                <input 
                    placeholder="Email"
                />
            </div>
            <div className="campoInput">
                <input 
                    placeholder="Contraseña"
                />
            </div>
            <div className="campoInput">
                <input 
                    placeholder="Confirmar contraseña"
                />
            </div>

            </form>
            <Foto />
            
        </div>
     );
}
 
export default Formulario;