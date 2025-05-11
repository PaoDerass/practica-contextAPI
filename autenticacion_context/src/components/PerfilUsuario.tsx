import React from 'react';
import { usarAutenticacion } from '../context/contextAutenticacion';

const PerfilUsuario = () => {
  const { usuario, iniciarSesion, cerrarSesion } = usarAutenticacion();

  return (
    <div
      style={{
        backgroundColor: '#fff0ff',
        border: '2px solid #cc99ff',
        borderRadius: '16px',
        padding: '30px',
        width: '300px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
      }}
    >
      {usuario ? (
        <>
          <h2 style={{ color: '#800080' }}>Bienvenido, {usuario.nombre}</h2>
          <button
            onClick={cerrarSesion}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#cc99ff',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <h2 style={{ color: '#800080' }}>No estás autenticado</h2>
          <button
            onClick={iniciarSesion}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#b266ff',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Iniciar sesión
          </button>
        </>
      )}
    </div>
  );
};

export default PerfilUsuario;
