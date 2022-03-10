import React            from 'react';
import { useSelector }  from 'react-redux';

import Grid             from '@mui/material/Grid';
import messages         from '../lang/messages';

import Layout           from './Layout';
import Spinner          from '../components/Common/Spinner/Spinner';



const NotFound = () => {

    // ===============================================================================================================================
    // DECLARACIONES ----------------------------------------------------------------------------------------------------------------
    // ===============================================================================================================================

    // Tomo del store
    const isLoading = useSelector(state => state.loading.isLoading);
    
    // Estilo
    const divStyle = {
        textAlign: 'center',
        marginTop: '35vh'
    };


    // ===============================================================================================================================
    // RENDERIZO ---------------------------------------------------------------------------------------------------------------------
    // ===============================================================================================================================

    return (
        <Spinner active={isLoading}>
            <Layout>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={divStyle}>
                        <h4>{ messages.errors.NOT_FOUND }</h4>
                    </Grid>
                </Grid>
            </Layout>
        </Spinner>
    );
}
 
export default NotFound;