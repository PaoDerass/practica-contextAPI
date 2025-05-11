import React, { createContext, useContext, useState, ReactNode } from 'react';

type Usuario = {
  nombre: string;
};

type TipoContextoAutenticacion = {
  usuario: Usuario | null;
  iniciarSesion: () => void;
  cerrarSesion: () => void;
};

const ContextoAutenticacion = createContext<TipoContextoAutenticacion | undefined>(undefined);

export const ProveedorAutenticacion = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const iniciarSesion = () => {
    setUsuario({ nombre: 'Maria Gonzales' });
  };

  const cerrarSesion = () => {
    setUsuario(null);
  };

  return (
    <ContextoAutenticacion.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </ContextoAutenticacion.Provider>
  );
};

export const usarAutenticacion = () => {
  const contexto = useContext(ContextoAutenticacion);
  if (!contexto) throw new Error('usarAutenticacion debe usarse dentro de ProveedorAutenticacion');
  return contexto;
};
