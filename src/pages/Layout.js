import React            from 'react';

import Container        from '@mui/material/Container';
import Grid             from '@mui/material/Grid';

import Footer           from '../components/Common/Footer/Footer';
import Header           from '../components/Common/Header/Header';



const Layout = props => {  


    // Defino los Estilos
    const amigalesStyle = {
        backgroundColor: '#0c0c0c',
        background: 'url("img/Fondo.png")',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#fff'
    };
    const containerStyle = {
        marginTop: '50px',
        minHeight: '83vh',
    };


    // Renderizo
    return (
        <div style={amigalesStyle}>

            <Header />

            <Container maxWidth="xl" style={containerStyle}>
                <Grid container>
                    { props.children }
                </Grid>
            </Container>

            <Footer />

        </div>
    );
};

export default Layout;