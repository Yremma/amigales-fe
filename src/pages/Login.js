import React, {useEffect}   from 'react';
import { useSelector }      from 'react-redux';

import { setJwtToken }      from '../helpers/authHelper';
import es                   from '../lang/es';

import Grid                 from '@mui/material/Grid';

import Layout               from './Layout';
import Spinner              from '../components/Common/Spinner/Spinner';



const Login = () => {
    

    // ============================================================================================
    // DECLARACIONES ------------------------------------------------------------------------------
    // ============================================================================================

    // Tomo del store
    const isLoading = useSelector(state => state.loading.isLoading);



    // ============================================================================================
    // FUNCIONES ----------------------------------------------------------------------------------
    // ============================================================================================
    
    // Al inicio redireccion
    useEffect(() => {
        setJwtToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYWZiY2U0NDQxNjZkMDJmNzI5M2FiN2FlZWEyZDYwOGE1YmE3NzY2NzE3MWNmN2UwMGJjOWIwNTY0NTVhZTg4NDQxY2EzZmVlNTViMzQ3MDQiLCJpYXQiOjE2NDY2NTQ3MzcsIm5iZiI6MTY0NjY1NDczNywiZXhwIjoxNjc4MTkwNzM3LCJzdWIiOiIzMCIsInNjb3BlcyI6W119.HMUfBKNJ_tH1raOsLvsotO15NaPdPm-h49bIPwGrs41YTcU7L6D4g7KaclXKJzZfyF67CH4_pHOOynscsDLia7ShpMMdZglUooL9q2ZMZVqrOJk3kzN2d4Kd0fNuZjewYTRoMR7j-NFyG4lEdZwx7_9g2Oa7k3bsGsnxRDHKUf0n-oMoUUvVPTjioR3lISW3BM9UAXfq65RsFqQoNVRypSPOYAI2i55CLkD4A95LzxTsL16pg_HVTp420cA4sijIljQ3XP7hR1VO4JQ95iWQui3-kUfkmS0kYF4K6B1G6ASVwIHkUJlEKpqv9ciR0ktka7RcAMObm4ZZ5Z2Y0eaqGYcEpb5CZEa21jlMXMOztnF7tknJievgx-qnlE40bupDhbC9aFTlg83dee0QILeH-CdoCmSfQXTKETxoEcDTsGwK_FQupgadbXm6RVpQAjCHTXC_NsbIYyUWyG2-HCBYKCj2Q-W0B8Q2mFkbITzjQ3edR8ige_T3QYqCRCPnCHv8C2Zr34EiDNXE7eGqqBCt0jK2MAc6IPv4zy0Oki_riI0FIrS_1JYIMbSl4yZuvvf551PnXSfTMNrNm3iI_92Fjq79cwft7OLeLYIcMD8WdTYXwUfBmpm0BTbU27ol14fWPcvsGox-RXNLVgUvX9Av18eLbLn6Vf7OOjj_X9mUrRY');
        //window.location = process.env.REACT_APP_LOGIN_URL;
    }, []);

    
    
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

export default Login;