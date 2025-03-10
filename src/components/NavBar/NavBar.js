// import logo from "../../assets/logoCarne.png";
 
// import { Link } from "react-router-dom";
// import "./NavBar.scss";

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         {/* Logo en la izquierda */}
//         <Link to="/" className="navbar-brand">
//           <img src={logo} alt="Logo de la carnicería" className="navbar-logo" />
//         </Link>

//         {/* Botón de menú desplegable para pantallas pequeñas */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Contenido del menú */}
//         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//           <ul className="navbar-nav mx-auto">
//             <li className="nav-item">
//               <Link to="/pages/Home" className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/pages/Login" className="nav-link">
//                 Login
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/pages/Register" className="nav-link">
//                 Register
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/pages/OrdersPanel" className="nav-link">
//                 OrdersPanel
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/pages/Designer3D" className="nav-link">
//                 Designer3D
//               </Link>
//             </li>
//           </ul>


//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Mi Proyecto</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li>
          <Link to="/register" className="nav-link">Registro</Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">Iniciar Sesión</Link>
        </li>
        <li>
          <Link to="/orders" className="nav-link">Pedidos</Link>
        </li>
        <li>
          <Link to="/designer" className="nav-link">Diseñador 3D</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;