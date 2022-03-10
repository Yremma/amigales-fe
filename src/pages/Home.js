import React                from 'react';
import { Route, Routes }    from 'react-router-dom';
import routes               from '../constants/routes';

import { isJwtTokenStored } from '../helpers/authHelper';

import Condiciones          from './Condiciones';
import Contacto             from './Contacto';
import Login                from './Login';
import Main                 from './Main';
import Nosotros             from './Nosotros';
import NotFound             from './NotFound';
import Politica             from './Politica';
import Reglas               from './Reglas';



const privateRoutes = [
    
];
const publicRoutes = [
    {   path: routes.CONDICIONES,
        component: Condiciones,
    },
    {   path: routes.CONTACTO,
        component: Contacto,
    },
    {   path: routes.HOME,
        component: Main,
    },
    {   path: routes.LOGIN,
        component: Login,
    },
    {   path: routes.NOSOTROS,
        component: Nosotros,
    },
    {   path: routes.POLITICA,
        component: Politica,
    },
    {   path: routes.REGLAS,
        component: Reglas,
    },
];


const PrivateRoute = ({ component: Component }) => {
    return isJwtTokenStored() ? <Component /> : <Login /> 
}
const PublicRoute = ({ component: Component }) => {
    return <Component />
}



const Home = () => {
    return (
        <Routes>

            {  privateRoutes.map(route => (
                    <Route 
                        exact
                        key = { route.path }
                        path = { route.path }
                        element = { <PrivateRoute component={ route.component } /> }
                    />    
                )) 
            } 

            {  publicRoutes.map(route => (
                    <Route 
                        exact
                        key = { route.path }
                        path = { route.path }
                        element = { <PublicRoute component={ route.component } /> }
                    />    
                )) 
            } 

            <Route 
                path = "*" 
                element = { <NotFound /> }
            />
                     
        </Routes>
    );
};

export default Home;