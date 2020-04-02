import React from 'react';

const Error = ({Mensaje}) => {
    return ( 
        <p className="red darken-4 error">{Mensaje}</p>
     );
}
 
export default Error;