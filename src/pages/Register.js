import React, { useState } from 'react';
import { auth } from '../Firebase'; // Asegúrate de que la ruta a firebase.js sea correcta
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    // Estados para manejar el correo y la contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Función para manejar el registro
    const handleRegister = async (e) => {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        try {
            // Registrar al usuario con Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
            // Si el registro es exitoso, muestra un mensaje
            console.log("Usuario registrado en Firebase:", userCredential.user);
            alert("¡Registro exitoso! Bienvenido a la plataforma.");
            
            // Opcional: Limpiar el formulario después del registro
            setEmail('');
            setPassword('');
        } catch (error) {
            // Si hay un error, muestra un mensaje de error
            console.error("Error al registrar:", error.message);

            // Manejar errores específicos de Firebase
            if (error.code === 'auth/email-already-in-use') {
                alert('El correo electrónico ya está en uso. Por favor, usa otro correo.');
            } else if (error.code === 'auth/invalid-email') {
                alert('El correo electrónico no es válido.');
            } else if (error.code === 'auth/weak-password') {
                alert('La contraseña es demasiado débil. Debe tener al menos 6 caracteres.');
            } else {
                alert(`Error al registrar: ${error.message}`);
            }
        }
    };

    return (
        <div className="register-container">
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;