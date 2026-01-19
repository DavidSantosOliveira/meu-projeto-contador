import './App.css';
import { useState } from 'react'; 

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* Vamos colocar seu código aqui dentro */}
      <h1>Boas-vindas</h1>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default App;