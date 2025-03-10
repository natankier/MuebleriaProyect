import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register'; // Ruta corregida
import Home from './pages/Home'; // Ruta corregida
import OrdersPanel from './pages/OrdersPanel'; // Ruta corregida
import Login from './pages/Login'; // Ruta corregida
import Designer3D from './pages/Designer3D'; // Ruta corregida

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/orders" element={<OrdersPanel />} />
                <Route path="/designer" element={<Designer3D />} />

            </Routes>
        </Router>
    );
};

export default App;
