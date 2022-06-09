
import { useState } from 'react';
import './App.css';
import Button from './Button';



const App = () => {
  const [text, setText] = useState("")
  return (
    <div className="App">
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <Button text={text} />
    </div>
  )
}

export default App