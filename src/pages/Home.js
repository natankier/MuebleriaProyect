// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ordersData } from '../data/Data'; // Importa los datos

const Home = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Usa los datos importados
        setOrders(ordersData);
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Bienvenido al Home</h1>
            <Carousel>
                {orders.map((order) => (
                    <Carousel.Item key={order.id}>
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
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Home;