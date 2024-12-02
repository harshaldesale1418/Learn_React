import { useState } from "react";
import './App.css'
function App() {
  let [counter,setCounter] = useState(10)

  const addvalue = () =>{
    if(counter >=20){
      alert("value is 20 you reach your limit")
    }
    else{
      setCounter(counter + 1)
    }
    
  }
  const removeValue = () =>{
    if(counter<=0){
      alert("value is less than 0")
    }
    else{
      setCounter(counter - 1 )
    }
    
  }

  return (
    <>
    <div id="main">
      <h1 id="heading">Counter Project</h1>
      <h2 id="showCount">Counter value :{counter}</h2>
      <button id="addValue" onClick={addvalue}>Add value</button>
      <br />
      <button id="removeValue" onClick={removeValue}>Remove value</button>

    </div>
      
    </>
  )
}

export default App
