import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 },
    { name: "Diana", marks: 88 },
];
  return (
    <>
      <h1 className="text-3xl font-bold underline  bg-red-400 text-black rounded-xl p-4">
        Hello world!
      </h1>
      <Card  students={students}/>
    </>
  )
}

export default App
