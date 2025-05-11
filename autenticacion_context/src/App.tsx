import React from 'react';
import { ProveedorAutenticacion } from './context/contextAutenticacion';
import PerfilUsuario from './components/PerfilUsuario';

function App() {
  return (
    <ProveedorAutenticacion>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(to bottom right, #e0bbff, #d0a1ff)',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <PerfilUsuario />
      </div>
    </ProveedorAutenticacion>
  );
}

export default App;
