import React                from 'react';
import { useSelector }      from 'react-redux';

import es                   from '../lang/es';

import Grid                 from '@mui/material/Grid';

import Layout               from './Layout';
import Spinner              from '../components/Common/Spinner/Spinner';



const Nosotros = () => {
    

    // ============================================================================================
    // DECLARACIONES ------------------------------------------------------------------------------
    // ============================================================================================

    // Tomo del store
    const isLoading = useSelector(state => state.loading.isLoading);



    // ============================================================================================
    // FUNCIONES ----------------------------------------------------------------------------------
    // ============================================================================================
    
    
    
    
    // ============================================================================================
    // RENDERIZO ****------------------------------------------------------------------------------
    // ============================================================================================

    return (
        <Spinner active={isLoading}>
            <Layout>
                <Grid container justifyContent="center" sx={{mb:2, mt:2}}>
                    <Grid item xs={10} sm={6}>
                        <img 
                            alt = { es.IN_CONSTRUCTION }
                            src = "img/Construccion.jpg" 
                            style = {{ width:'100%' }}
                        />
                    </Grid>
                </Grid>
            </Layout>
        </Spinner>
    );
};

export default Nosotros;