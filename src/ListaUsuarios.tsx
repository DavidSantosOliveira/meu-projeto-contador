import { useState, useEffect } from 'react';


interface Usuario {
  id: number;
  name: string;
}

function ListaUsuarios() {
  
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
      .catch(erro => console.error(erro));
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map(item => (
          <li key={item.id}> {item.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;