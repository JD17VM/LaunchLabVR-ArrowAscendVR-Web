import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navegador} from './widgets/Navegador'
import { Footer} from './widgets/Footer'
import { Inicio} from './Inicio'
import { Nosotros } from './Nosotros'
import { Proceso } from './Proceso'

function App() {

  return (
    <BrowserRouter basename="/LaunchLab">
      <Navegador></Navegador>
      
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/proceso" element={<Proceso />} />
          
          <Route path="/index2" element={<Inicio />} />
          <Route path="/nosotros2" element={<Nosotros />} />
          <Route path="/proceso2" element={<Proceso />} />
        </Routes>
      </main>

      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
