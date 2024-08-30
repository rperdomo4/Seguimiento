import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [contraseniaError, setContraseniaError] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Enviando datos de inicio de sesión:', { Usuario: username, Contrasenia: password });

    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Usuario: username, Contrasenia: password }),
      });

      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      if (response.ok) {
        if (data.error && data.usuario) {
          setIsChangingPassword(true);
          setError(data.error || 'Debe cambiar su contraseña antes de continuar');
        } else {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.usuario);
          setError('');
          navigate('/dashboard');
        }
      } else {
        setError(data.error || 'Usuario o contraseña incorrectos');
      }
    } catch (error) {
      setError('Error en la conexión');
    }
  };

  const validateContrasenia = (value) => {
    if (value.length < 8) {
      setContraseniaError('La contraseña debe tener al menos 8 caracteres.');
    } else {
      setContraseniaError('');
    }
  };

  const handlePasswordChange = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('La nueva contraseña y la confirmación no coinciden');
      return;
    }

    if (contraseniaError) {
      setError(contraseniaError);
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Usuario: username,
          Contrasenia: password,
          NuevaContrasenia: newPassword,
          action: 'change-password'
        }),
      });

      const data = await response.json();
      console.log('Respuesta del servidor:', data);

      if (response.ok) {
        setError('');
        alert(data.message || 'Contraseña cambiada con éxito');
        setIsChangingPassword(false);
      } else {
        setError(data.error || 'Error al cambiar la contraseña');
      }
    } catch (error) {
      setError('Error en la conexión');
    }
  };

  const showChangePasswordLink = error && !isChangingPassword && error === 'Debe cambiar su contraseña antes de continuar';

  return (
    <div className="login-container">
      <div className="grid-container">
        <div className="login-box">
          <img src="/Logo FCN blanco.png" alt="Logo FCN" className="logo" />
          <h2>{isChangingPassword ? 'Cambiar Contraseña' : 'Inicio de Sesión'}</h2>
          <form onSubmit={isChangingPassword ? handlePasswordChange : handleLogin}>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña Actual"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {isChangingPassword && (
              <div className="change-password-fields">
                <input
                  type="password"
                  placeholder="Nueva Contraseña"
                  value={newPassword}
                  onChange={(event) => {
                    setNewPassword(event.target.value);
                    validateContrasenia(event.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Confirmar Nueva Contraseña"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <button
                  type="submit"
                  className="login-button"
                  disabled={contraseniaError}
                >
                  Guardar
                </button>
              </div>
            )}
            {!isChangingPassword && <button type="submit" className="login-button">Ingresar</button>}
          </form>
          {error && !isChangingPassword && (
            <p className="error-message">
              {error} {showChangePasswordLink && (
                <button
                  type="button"
                  onClick={() => setIsChangingPassword(true)}
                  className="error-link"
                >
                  Cambiar contraseña
                </button>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
