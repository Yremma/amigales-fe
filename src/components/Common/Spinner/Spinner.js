import React, { Fragment }  from 'react';
import Autorenew            from '@mui/icons-material/Autorenew';

import './Spinner.css';



const Spinner = ({ children, active }) => {
    return (
        <Fragment>
            {   active 
                    ?
                        <div className="overlay">
                            <div className="loading text-center">
                                <Autorenew 
                                    fontSize = "large" 
                                    className = "rotating"
                                />
                                <br></br>
                                <strong>Cargando...</strong>
                            </div>
                        </div>
                    :
                        null
            }
            { children }
        </Fragment>
    );
};

export default Spinner;