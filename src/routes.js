import React from 'react';
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage';
import Notfoundpage from './pages/Notfoundpage';
import AdminPage from './pages/AdminPage';
import TrainerPage from './pages/TrainerPage';
import CustomerPage from './pages/CustomerPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
<<<<<<< HEAD
import ServicePage from './pages/ServicePage';
import EventPage from './pages/EventPage';
import PackagePage from './pages/PackagePage';
import BlogPage from './pages/BlogPage';
=======
<<<<<<< HEAD
import TestPage from './pages/TestPage';

=======
import Dich_vu from './pages/Dich_vu';
import Su_kien from './pages/Su_kien';
import Goi_tap from './pages/Goi_tap';
import Blog from './pages/Blog';
>>>>>>> ff89108b49f36071e1f4476d6bd6314041dfead8
>>>>>>> 303bd74cca3df14f54fc400038e398601546703e

const routes = [
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: '/service',
        element: <ServicePage />
    },
    {
        path: '/event',
        element: <EventPage />
    },
    {
        path: '/package',
        element: <PackagePage />
    },
    {
        path: '/blog',
        element: <BlogPage />
    },  
    {
        path: '/login',
        element: <Loginpage />
    },
    {
        path: '/change-password',
        element: <ChangePasswordPage />
    },
    {
        path: '/profile',
        element: <CustomerPage />
    },
    {
        path: '/admin/*',
        element: <AdminPage />
    },
    {
        path: '/trainer/*',
        element: <TrainerPage />
    },
    {
        path: '/customer/*',
        element: <CustomerPage />
    },
    {
        path: '/customer/*',
        element: <CustomerPage />
    },
    {
        path: '*',
        element: <Notfoundpage />
    },
    {
        path: '/test',
        element: <TestPage />
    }
]

export default routes;