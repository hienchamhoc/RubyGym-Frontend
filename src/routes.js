import React from 'react';
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage';
import Notfoundpage from './pages/Notfoundpage';
import AdminPage from './pages/AdminPage';
import TrainerPage from './pages/TrainerPage';
import CustomerPage from './pages/CustomerPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import ServicePage from './pages/ServicePage';
import EventPage from './pages/EventPage';
import PackagePage from './pages/PackagePage';
import FeedbackPage from './pages/FeedbackPage';

import TestPage from './pages/TestPage';


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
        path: '/event/*',
        element: <EventPage />
    },
    {
        path: '/package',
        element: <PackagePage />
    },
    {
        path: '/feedback',
        element: <FeedbackPage />
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
        path: 'member/profile',
        element: <CustomerPage />
    },
    {
        path: '/admin/*',
        element: <AdminPage />
    },
    {
        path: '/trainer/profile',
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
    },
]

export default routes;