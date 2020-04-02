import React, {useState} from 'react';
import Error from './Error';


const Formulario = ({busqueda,guardarBusqueda, guardarConsultar}) => {
   
    const [error, guardarError] = useState(false);

    const {ciudad, pais} = busqueda;

    const handleChange = e =>{
        //actualizar 
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();

        //validar 
        if(ciudad.trim()==='' || pais.trim()===''){
            guardarError(true);
            return;
        }
        //mandarlo
        guardarError(false);
        guardarConsultar(true);


    }
    return ( 
       <form
        onSubmit={handleSubmit}
       >
           {error? <Error Mensaje="Todos los campos son obligatorios"></Error>: null}
           <div className="input-field col s12">
               <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
               />
               <label for="ciudad">
                    Ciudad:
               </label>
           </div>

           <div className="input-field col s12">
               <select
                    type="text"
                    name="pais"
                    id="pais"
                    onChange={handleChange}
                    value = {pais}
               >
                   <option value="">-- Seleccione un País --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="GT">Guatemala</option>


                   </select> 
               <label for="pais">
                    País:
               </label>
           </div>

           <div className="field col s12">
               <button
                type="submit"
                value="Buscar Clima"
                className="waves-effect waves-light btn-large btn-block danger"

               >
                   Buscar Clima
               </button>

                   
            

           </div>


       </form>
     );
}
 
export default Formulario;