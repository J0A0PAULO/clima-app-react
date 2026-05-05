import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Home';
import { Locais } from './pages/Locais';
function App() {

  return(
    <>  
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/locais' element={<Locais></Locais>}></Route>
    </Routes>
    </>
  )

}

export default App
