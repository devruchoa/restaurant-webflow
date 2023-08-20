import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Reserva from './pages/Reserva';
import Header from './components/Header';

export default function AppRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reserva' element={<Reserva />} />
            </Routes>
        </Router>
    );
}
