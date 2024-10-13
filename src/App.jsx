import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navegador} from './widgets/Navegador'
import { Footer} from './widgets/Footer'
import { Inicio} from './Inicio'
import { Nosotros } from './Nosotros'
import { Proceso } from './Proceso'
import { Proyectos } from './Proyectos'
import { Documentos } from './Documentos'

function App() {

  return (
    <BrowserRouter basename="/LaunchLab">
      <Navegador></Navegador>
      
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/proceso" element={<Proceso />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/documentos" element={<Documentos />} />
          
          <Route path="/index2" element={<Inicio />} />
          <Route path="/nosotros2" element={<Nosotros />} />
          <Route path="/proceso2" element={<Proceso />} />
          <Route path="/proyectos2" element={<Proyectos />} />
          <Route path="/documentos2" element={<Documentos />} />
        </Routes>
      </main>

      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
