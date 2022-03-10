import cookieHelper from './cookieHelper';

const isJwtTokenStored = () => cookieHelper.get(process.env.REACT_APP_TN) && cookieHelper.get(process.env.REACT_APP_TN) !== '';
const getJwtToken = () => (isJwtTokenStored() ? cookieHelper.get(process.env.REACT_APP_TN) : null);
const setJwtToken = jwtToken => cookieHelper.set(process.env.REACT_APP_TN, jwtToken);
const removeJwtToken = () => cookieHelper.remove(process.env.REACT_APP_TN);
const getHeaders = () => ({ Authorization: isJwtTokenStored() ? `Bearer ${getJwtToken()}` : '', });

export {    
    getHeaders,
    getJwtToken,  
    isJwtTokenStored,  
    removeJwtToken,  
    setJwtToken,  
};