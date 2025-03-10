import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'; // Importa el componente Card de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

const OrdersPanel = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Simular una petición al backend para obtener los pedidos
        setOrders([
            { id: 1, description: 'Mesa de madera', status: 'Pendiente', image: '/images/MesaMadera.jpg' },
            { id: 2, description: 'Silla de roble', status: 'En progreso', image: '/images/SillaMadera.jpg' },
            { id: 3, description: 'Estante vintage', status: 'Completado', image: '/images/EstanteMaderaHierro.jpg' },
            { id: 4, description: 'Mesa de café', status: 'Pendiente', image: '/images/MesaCafe.jpg' },
            { id: 5, description: 'Silla moderna', status: 'En progreso', image: '/images/SillaModerna.jpg' },
            { id: 6, description: 'Estante flotante', status: 'Completado', image: '/images/EstanteFlotante.jpg' },
            { id: 7, description: 'Mesa de jardín', status: 'Pendiente', image: '/images/MesaJardin.jpg' },
            { id: 8, description: 'Silla plegable', status: 'En progreso', image: '/images/SillaPlegable.jpg' },
            { id: 9, description: 'Estante modular', status: 'Completado', image: '/images/EstanteModular.jpg' },
            { id: 10, description: 'Mesa de centro', status: 'Pendiente', image: '/images/MesaCentro.jpg' },
            { id: 11, description: 'Silla ergonómica', status: 'En progreso', image: '/images/SillaErgonomica.jpg' },
            { id: 12, description: 'Estante rústico', status: 'Completado', image: '/images/EstanteRustico.jpg' },
            { id: 13, description: 'Mesa extensible', status: 'Pendiente', image: '/images/MesaExtensible.jpg' },
            { id: 14, description: 'Silla de comedor', status: 'En progreso', image: '/images/SillaComedor.jpg' },
            { id: 15, description: 'Estante industrial', status: 'Completado', image: '/images/EstanteIndustrial.jpg' },
        ]);
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
                                    width: '100%', // Ajusta al ancho de la tarjeta
                                    height: '200px', // Altura fija
                                    objectFit: 'cover' // Ajusta la imagen para cubrir el espacio
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