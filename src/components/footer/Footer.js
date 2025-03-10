import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Iconos de redes sociales
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss'; // Archivo CSS para estilos personalizados

const Footer = () => {
    return (
        <footer className="footer mt-auto py-4 bg-dark text-white">
            <Container>
                <Row>
                    {/* Columna 1: Enlaces rápidos */}
                    <Col md={4} className="mb-4">
                        <h5>Enlaces Rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Inicio</a></li>
                            <li><a href="/about" className="text-white">Nosotros</a></li>
                            <li><a href="/services" className="text-white">Servicios</a></li>
                            <li><a href="/contact" className="text-white">Contacto</a></li>
                        </ul>
                    </Col>

                    {/* Columna 2: Información de contacto */}
                    <Col md={4} className="mb-4">
                        <h5>Contacto</h5>
                        <ul className="list-unstyled">
                            <li>Dirección: Calle Falsa 123, Ciudad, País</li>
                            <li>Teléfono: +123 456 789</li>
                            <li>Email: info@tudominio.com</li>
                        </ul>
                    </Col>

                    {/* Columna 3: Redes sociales */}
                    <Col md={4} className="mb-4">
                        <h5>Síguenos</h5>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                <FaFacebook size={25} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                <FaTwitter size={25} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                <FaInstagram size={25} />
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Derechos de autor */}
                <Row>
                    <Col className="text-center mt-4">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;