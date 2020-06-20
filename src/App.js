import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = useState ([]);
  
  return (
    <div className="App">
     <header className="App-header">
        <p>React Todo</p>
     </header>
    </div>
  );
}

export default App;
