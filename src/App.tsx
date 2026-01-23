import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ListaUsuarios from './ListaUsuarios';


function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/home">Home</Link> | 
      <Link to="/usuarios">Usuários</Link>
    </nav>
    <br />
    
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/usuarios" element={<ListaUsuarios />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}



export default App;