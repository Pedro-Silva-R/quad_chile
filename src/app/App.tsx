import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Sport } from './pages/Sport';

/**
 * Design Rationale:
 * Kinetic Brutalism V2: Máquina de alto rendimiento con bordes duros y claridad técnica.
 * Paleta rojo puro (#ff0000), azul (#0057ff), metal (#8a8d8f) + blanco/negro absolutos.
 * Sin gradientes decorativos, solo bloques planos. Tipografía Epilogue (display itálico en hero),
 * Space Grotesk (UI), IBM Plex Mono (technical labels). Sombras duras sin blur, bordes sólidos 3px,
 * esquinas a 0px. El rojo domina CTAs de impacto, azul para links/focus.
 */

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/el-deporte" element={<Sport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}