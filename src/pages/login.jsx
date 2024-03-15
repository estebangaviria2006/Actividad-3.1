import React, { useState } from 'react';
import './login.css';
import imagen from '../assets/img/logoOrigi.png';
import axios from 'axios'; // Importa Axios

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        password: '',
        rol: '',
        estado: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/registrarUsuario', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data); // Manejar la respuesta según necesites
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="formulario-container">
                <h2 className="Titulo">Registrarse</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="correo"
                        placeholder="Correo"
                        value={formData.correo}
                        onChange={handleChange}
                    />
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="rol"
                        placeholder="Rol"
                        value={formData.rol}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="estado"
                        placeholder="Estado"
                        value={formData.estado}
                        onChange={handleChange}
                    />
                    <button className="boton" type="submit">Registrarse</button>
                </form>
            </div>
            <div className="imagen-container">
                <img src={imagen} alt="Imagen" className="imagen" />
                <p className="imagen-texto">Agro Register facilita el control de actividades en fincas</p>
            </div>
        </div>
    );
}

export default Login;
