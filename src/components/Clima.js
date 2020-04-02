import React from 'react';

const Clima = ({resultado}) => {
const {name, main} = resultado;
if(!name) return null;

//grados kelvin
const kelvin = 273.15;

    return (
        <div className="card-panel black col s12">
            <div className="white-text">
                <h2>El clima de {name}</h2>
                <p className="tempratura">
                    {parseFloat( main.temp-kelvin,10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p >Temperatura Maxima:
                    {parseFloat( main.temp_max-kelvin,10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p >Tempratura Minima:
                    {parseFloat( main.temp_min-kelvin,10).toFixed(2)} <span>&#x2103;</span>
                </p>

            </div>

        </div>
      );
}
 
export default Clima;