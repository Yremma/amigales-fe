import Cookies from 'universal-cookie';


const cookie = new Cookies();


class cookieHelper {

    get(key)
    {   return cookie.get(key);
    }

    set(key, value, options)
    {   cookie.set(key, value, options);
    }

    remove(key, options)
    {   cookie.remove(key, options);
    }
}

export default new cookieHelper();