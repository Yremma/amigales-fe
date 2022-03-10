import React                from 'react';
import { useNavigate }      from 'react-router-dom';

import BottomNavigation     from '@mui/material/BottomNavigation';
import Grid                 from '@mui/material/Grid';
import IconButton           from '@mui/material/IconButton';
import Paper                from '@mui/material/Paper';
import Tooltip              from '@mui/material/Tooltip';

import CodeIcon             from '@mui/icons-material/Code';
import GavelIcon            from '@mui/icons-material/Gavel';
import GroupsIcon           from '@mui/icons-material/Groups';
import MailOutlineIcon      from '@mui/icons-material/MailOutline';
import SecurityIcon         from '@mui/icons-material/Security';
import VoiceOverOffIcon     from '@mui/icons-material/VoiceOverOff';
import WhatsAppIcon         from '@mui/icons-material/WhatsApp';

import es                   from '../../../lang/es';
import pjson                from '../../../../package.json';
import routes               from '../../../constants/routes';

import './Footer.css';



const Footer = () => {



    // =====================================================================================================================
    // DECLARACIONES -------------------------------------------------------------------------------------------------------
    // =====================================================================================================================

    // Inicializo el Navigate
    const navigate = useNavigate();



    // =====================================================================================================================
    // RENDERIZO -----------------------------------------------------------------------------------------------------------
    // =====================================================================================================================
    
    return (  
        <Paper sx={{ bottom:0, left:0, right:0 }}>
            <BottomNavigation className="footer-navigation">
                <Grid 
                    container
                    alignItems = "center"
                    justifyContent = "space-around"
                >                    
                    <Grid item>
                        <Tooltip title={es.FOOTER.ABOUT_US}>
                            <IconButton
                                color = "warning"                                
                                onClick = { ()=>{ navigate(routes.NOSOTROS) } }
                            >
                                <GroupsIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title={es.FOOTER.COMMUNITY_RULES}>
                            <IconButton
                                color = "warning"                                
                                onClick = { ()=>{ navigate(routes.REGLAS) } }
                            >
                                <VoiceOverOffIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title={es.FOOTER.PRIVACY}>
                            <IconButton
                                color = "warning"                                
                                onClick = { ()=>{ navigate(routes.POLITICA) } }
                            >
                                <SecurityIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title={es.FOOTER.TERMS}>
                            <IconButton
                                color = "warning"                                
                                onClick = { ()=>{ navigate(routes.CONDICIONES) } }
                            >
                                <GavelIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title={es.FOOTER.SUGESTIONS}>
                            <IconButton
                                color = "warning"                                
                                onClick = { ()=>{ navigate(routes.CONTACTO) } }
                            >
                                <MailOutlineIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title={es.FOOTER.CONTACT_US}>
                            <IconButton
                                color = "warning"                                
                                onClick = { ()=>{ window.open('https://wa.me/5493815980295') } }
                            >
                                <WhatsAppIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title={es.FOOTER.COPYRIGHT}>
                            <IconButton
                                color = "warning"
                            >
                                <CodeIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <form action="https://www.paypal.com/donate" method="post" target="_top">
                            <input type="hidden" name="hosted_button_id" value="HQ86NAALZKD4U" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_AR/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                    </Grid>
                    <Grid item className="hidden-xs">
                        v.{ pjson.version }
                    </Grid>
                </Grid>
            </BottomNavigation>
        </Paper>
    );
}
 
export default Footer;