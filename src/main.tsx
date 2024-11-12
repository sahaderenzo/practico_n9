import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { MiPrimerComponent } from './components/MiPrimerComponente/MiPrimerComponent';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MiPrimerComponent text={"Texto de prueba"} color={"red"} fontSize={5} />
    <MiPrimerComponent text={"Texto de prueba dos"} color={"blue"} />
  </StrictMode>,
)
