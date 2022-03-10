import React            from 'react';
import { useSelector }  from 'react-redux';

import Grid             from '@mui/material/Grid';

import Layout           from './Layout';
import Spinner          from '../components/Common/Spinner/Spinner';





const Main = () => {
        


    // ===============================================================================================================================
    // DECLARACIONES ----------------------------------------------------------------------------------------------------------------
    // ===============================================================================================================================

    // Tomo del store
    const isLoading = useSelector(state => state.loading.isLoading);



    // ===============================================================================================================================
    // RENDERIZO ---------------------------------------------------------------------------------------------------------------------
    // ===============================================================================================================================

    return (
        <Spinner active={isLoading}>
            <Layout>
                <Grid container justifyContent="center" sx={{mb:2, mt:2}}>
                    <Grid item xs={12}>
                        MAIN COMPONENT
                    </Grid>
                </Grid>
            </Layout>
        </Spinner>
    );
};

export default Main;