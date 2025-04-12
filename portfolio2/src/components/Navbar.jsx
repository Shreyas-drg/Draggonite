import React, {useState} from 'react'
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {key:1, name:"Home"},
    {key:2, name:"Certificates"},
    {key:3, name:"Contact"},
  ];
  return (
    // reactscrollable for clicking on anything and then it will start scrolling.
    <> 
    <div>
    <div className='flex justify-between m-3 bg-amber-200 shadow-[0_0_20px_rgba(255,223,0,0.6),0_0_40px_rgba(255,223,0,0.5),0_0_70px_rgba(255,223,0,0.4),0_0_100px_rgba(255,223,0,0.3)]'>
      <div className='flex items-center space-x-3'>
        <img className="w-10 h-10 rounded-full" src="/original.jpg" alt="" />
        <div className='items-center mb-1'>
        <h1 className='text-2xl font-bold'>Shreyas<span className='text-2xl font-bold'> Anand Bakshi</span></h1>
        <p>Future Full Stack Developer</p>
        </div>
      </div>
      <div>
        <ul className='md:flex space-x-4 text-xl p-4 hidden'>
          {navItems.map(({key, name}) => (
            <li key={key}>{name}</li>
          ))}
        </ul>
        <div className='md:hidden'>
          <button onClick={() => setMenu(!menu)} className='text-2xl'>
          {menu? <ImCross /> : <IoMdMenu /> }
            </button>
        </div>
      </div>
    </div>
    {menu &&
    <div className='flex justify-between'>
            <div className='w-1/2'></div>
            <div className='w-1/2 '>
            <ul className=' space-y-4 text-xl p-4 items-end'>
          {navItems.map(({key, name}) => (
            <li key={key}>{name}</li>
          ))}
        </ul>
            </div>
      </div>
    }
    </div>
    </>
    
  )
}

export default Navbar