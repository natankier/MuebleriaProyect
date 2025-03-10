// src/components/OrdersPanel.js
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ordersData } from '../data/Data'; // Importa los datos

const OrdersPanel = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Usa los datos importados
        setOrders(ordersData);
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Panel de Pedidos</h2>
            <div className="row">
                {orders.map((order) => (
                    <div key={order.id} className="col-md-4 mb-4">
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src={order.image} 
                                style={{ 
                                    width: '100%', 
                                    height: '200px', 
                                    objectFit: 'cover' 
                                }} 
                            />
                            <Card.Body>
                                <Card.Title>{order.description}</Card.Title>
                                <Card.Text>
                                    <strong>Estado:</strong> {order.status}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersPanel;