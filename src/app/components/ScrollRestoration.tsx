import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Al cambiar de ruta, forzamos el scroll al inicio de la página
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' evita que se vea un salto o animación no deseada al cambiar de vista
    });
  }, [pathname]);

  return null; // Es un componente "invisible" que solo maneja lógica
}
