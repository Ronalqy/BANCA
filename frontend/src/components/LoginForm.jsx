import React, { useState } from 'react';

function LoginForm() {
  // Estados para los campos del formulario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const CAPTCHA = 'ABC123'; // Código fijo de prueba

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (username !== 'demo') {
      setError('Usuario incorrecto.');
      return;
    }

    if (password !== '1234') {
      setError('Contraseña incorrecta.');
      return;
    }

    if (captchaInput !== CAPTCHA) {
      setError('CAPTCHA inválido.');
      return;
    }

    // Si todo es correcto
    setError('');
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <div className="login-success">
        <h2>Bienvenido, {username}!</h2>
        <p>Has iniciado sesión correctamente.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="demo"
        />
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="1234"
        />
      </div>

      <div>
        <label>CAPTCHA: {CAPTCHA}</label>
        <input
          type="text"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          placeholder="Ingrese el CAPTCHA"
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;
