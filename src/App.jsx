import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navegador} from './widgets/Navegador'
import { Footer} from './widgets/Footer'

function App() {

  return (
    <BrowserRouter basename="/LaunchLab">
      <Navegador></Navegador>
      
      <main>
        <Routes>
          
        </Routes>
      </main>

      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
