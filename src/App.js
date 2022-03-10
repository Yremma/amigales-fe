import React                        from 'react';
import { Provider }                 from 'react-redux';
import { BrowserRouter as Router }  from 'react-router-dom';
import './App.css';

import store                        from './store';
import Home                         from './pages/Home';


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Home />
            </Router>
        </Provider>
    );
}

export default App;
