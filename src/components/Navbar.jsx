import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="flex bg-cyan-600 gap-11 justify-around h-12">
        <div className="logo font-bold text-3xl">Todo</div>
        <ul className="flex gap-8 text-xl m-3">
            <li className="home cursor-pointer hover:font-bold transition-all duration-300 ">Home</li>
            <li className="tasks cursor-pointer hover:font-bold transition-all duration-300"> Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
