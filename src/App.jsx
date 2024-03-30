import { useState } from 'react'
import './App.css'
import { Socials } from './components/Socials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi, I am  Anish</h1>
      <h2>This website is under construction... 🚧 </h2>
      <h3>Please visit later :&#41;</h3>
      <Socials></Socials>
    </>
  )
}

export default App
