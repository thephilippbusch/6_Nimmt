import React, { useState } from 'react';
import HomePage from './pages/homepage';
import LoginPage from './pages/login';
import Header from './pages/header';

const Main = () => {
    return (
        <div>
            <Header />
            <LoginPage />
        </div>
    )
}

export default Main;