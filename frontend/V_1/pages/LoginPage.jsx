import React from 'react';


function LoginPage() {
  return (
    <div className="login-page">
      <h1>Iniciar Sesión</h1>
      <form>
        <div>
          <label>Correo electrónico</label>
          <input type="email" placeholder="ejemplo@correo.com" />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" placeholder="Tu contraseña" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;



