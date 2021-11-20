import React from 'react';
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage';
import Notfoundpage from './pages/Notfoundpage';
import AdminPage from './pages/AdminPage';


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
        path: '/admin/*',
        element: <AdminPage/>
    },
    {
        path: '*',
        element: <Notfoundpage/>
    }
]

export default routes;