import React from 'react';
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage';
import Notfoundpage from './pages/Notfoundpage';


const routes = [
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path: '/login',
        element: <Loginpage/>
    },
    {
        path: '*',
        element: <Notfoundpage/>
    }
]

export default routes;