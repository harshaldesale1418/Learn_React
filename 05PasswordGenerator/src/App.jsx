import { useState } from 'react'
import {useCallback} from 'react'
import {useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [noAllowed,setNoAllowed]= useState(false)
  const [specialCharAllowed,setSpecialCharAllowed]=useState(false)
  const [password,setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let no = "0123456789";
    let sp = "!@#$%&*(){}";
    if(noAllowed) str+=no
    if(specialCharAllowed) str+=sp
    for(let i=1;i<=length;i++){
      let randomValue = Math.floor(Math.random() * str.length+1);
      pass+=str[randomValue]
    }
    setPassword(pass)
  },[length,noAllowed,specialCharAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{passwordGenerator()},[length,noAllowed,specialCharAllowed,passwordGenerator])
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500 text-center'>
        <h1 className='text-4xl text-center text-black my-1'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 '
          placeholder='password'
          readOnly 
          ref={passwordRef}/>
          <button 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' 
            onClick={copyPasswordToClipBoard}>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              max={100} 
              min={4} 
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={noAllowed}
            id='numberInput'
            onChange={()=>{
              setNoAllowed((prev)=>!prev);
            }} />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {specialCharAllowed}
            id = 'SpecialCharInput'
            onChange={()=>{
              setSpecialCharAllowed((prev) => !prev);
            }} />
            <label htmlFor="specialchar">Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
