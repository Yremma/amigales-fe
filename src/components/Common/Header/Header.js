import React, { useEffect }         from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate }              from 'react-router-dom';

import { getUserDataAction }        from '../../../actions/authActions';

import AppBar                       from '@mui/material/AppBar';
import Button                       from '@mui/material/Button';
import Grid                         from '@mui/material/Grid';
import Toolbar                      from '@mui/material/Toolbar';

import es                           from '../../../lang/es';
import routes                       from '../../../constants/routes';

import './Header.css';





const Header = () => {



    // =====================================================================================================================
    // DECLARACIONES -------------------------------------------------------------------------------------------------------
    // =====================================================================================================================

    // Inicializo el Dispatch
    const dispatch = useDispatch();

    // Inicializo el Navigate
    const navigate = useNavigate();
    
    // Traigo el store
    const user = useSelector(state => state.auth.user);

   

    // =====================================================================================================================
    // FUNCIONES -----------------------------------------------------------------------------------------------------------
    // =====================================================================================================================

    // Verifico si hay datos al inicio
    useEffect(() => {
        // Si no hay datos, debo buscarlos
        if(!user)
        {   loadData();
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    // Cargo datos
    const loadData = () => {
        // Llamo al dispatch
        dispatch( getUserDataAction() );
    }



    // =====================================================================================================================
    // RENDERIZO -----------------------------------------------------------------------------------------------------------
    // =====================================================================================================================

    return (
        <AppBar>
            <Toolbar className="cabecera">
                <Grid container justifyContent="space-between">
                    <Grid item></Grid>
                    <Grid item>
                        <Button 
                            color = "warning"
                            onClick = { ()=>{ navigate(routes.LOGIN) } }
                            variant = "text"
                        >
                            { es.GET_IN }
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
 
export default Header;