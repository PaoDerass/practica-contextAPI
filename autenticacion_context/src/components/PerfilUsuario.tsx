import React from 'react';
import { usarAutenticacion } from '../context/contextAutenticacion';

const PerfilUsuario = () => {
  const { usuario, iniciarSesion, cerrarSesion } = usarAutenticacion();

  return (
    <div style={{ border: '1px solid gray', padding: '20px', width: '300px' }}>
      {usuario ? (
        <>
          <h2>Bienvenido, {usuario.nombre}</h2>
          <button onClick={cerrarSesion}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <h2>No estás autenticado</h2>
          <button onClick={iniciarSesion}>Iniciar sesión</button>
        </>
      )}
    </div>
  );
};

export default PerfilUsuario;
