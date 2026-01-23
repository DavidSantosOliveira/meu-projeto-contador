import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Boas-vindas</h1>
            <p>Contagem: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}

export default Home;