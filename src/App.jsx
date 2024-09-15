import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navegador} from './widgets/Navegador'

function App() {

  return (
    <BrowserRouter basename="/LaunchLab">
      <Navegador></Navegador>
      
      <main>
        <Routes>
          
        </Routes>
      </main>

      
    </BrowserRouter>
  )
}

export default App
