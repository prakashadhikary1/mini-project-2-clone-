import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className="bg-red-500 py-5 ">
     <header className= "max-w-7xl  flex items-center justify-between text-xl text-black/75  m-auto">
     <h1 className="text-4xl"><span className="font-bold text-red-700">L</span>ogo</h1>
     <div className="flex  items-center gap-9 ">
      <a href=" ">Features</a>
      <a href=" ">Use Cases</a>
      <a href=" ">Integrations</a>
      <a href=" ">About Us</a>
     </div>
     <Button title="Join Us"/>
     </header>
     </div>
  )
}

export default Header
