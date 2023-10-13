import { Routes, Route } from 'react-router-dom';


import './app.scss';
import yokelogo from './assets/yoke-press-logo.webp';
import BaseRoute from "./routes/BaseRoute";


function App() {
  return (
      <div className='layout'>
        <header className='navbar'>
          <h1 className='logo-text'>Yoke Films</h1>
          <img className='logo' src={yokelogo} alt='Yoke icon' loading='lazy'/>
        </header>
        <Routes>
          <Route path='/*' element={<BaseRoute/>} />
        </Routes>
      </div>
  )
}

export default App;
