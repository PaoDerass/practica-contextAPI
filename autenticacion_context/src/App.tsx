import React from 'react';
import { ProveedorAutenticacion } from './context/contextAutenticacion';
import PerfilUsuario from './components/PerfilUsuario';

function App() {
  return (
    <ProveedorAutenticacion>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
        <PerfilUsuario />
      </div>
    </ProveedorAutenticacion>
  );
}

export default App;
