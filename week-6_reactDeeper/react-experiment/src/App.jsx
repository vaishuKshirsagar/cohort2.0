import { memo, useCallback } from "react";
import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(()=>{
    console.log("Hi there")
  }, [])

  return <div>
    <ButtonComponent inputFunction={inputFunction}/>
    <button 
    onClick={()=>{
      setCount(count+1);
    }}>Click me {count}</button>
  </div>
}

const ButtonComponent= memo(({inputFunction}) => {
  console.log("child render")

  return <div>
    <button>Button clicked</button>
  </div>
})

export default App;
