import React, {Fragment, useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';




function App() {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
});
const [resultado, guardarResultado] = useState({});
const [error, guardarError] = useState(false);
const [consultar, guardarConsultar] = useState(false);
const {ciudad, pais} = busqueda;

useEffect(()=> {
  const consultarAPI = async () => {

    if(consultar) {
      const appId = 'd9ef6fce4b44d5acbd98e8697ec3e41c';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarResultado(resultado);
      guardarConsultar(false);
      console.log(resultado);

      // Detecta si hubo resultados correctos en la consulta

      if(resultado.cod === "404") {
          guardarError(true);
      } else {
          guardarError(false);
      }
    }
    
}
  consultarAPI();
},[consultar]);

let componente;
if(error){
  componente= <Error Mensaje="No hay Resultados"/>
}else{
  componente = <Clima
  resultado={resultado}
/>
}


  return (
    <Fragment>
         <Header
         titulo='Clima App'
         />

         <div className="contenedor-form">
           <div className="container">
                <div className="row">
                  <div className="col m6 s12 ">
                    <Formulario
                        busqueda={busqueda}
                        guardarBusqueda={guardarBusqueda}
                        guardarConsultar={guardarConsultar}
                    />

                  </div>
                  <div className="col m6 s12 ">
                      {componente}
                  </div>

                </div>
           </div>
         </div>
    </Fragment>

  );
}

export default App;
