import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Nav()
{
    const[taggleMenu,setTaggelMenu]=useState(false)
    return(
        <header className="flex justify-between px-4 bg-sky-300 p-4 text-white font-serif font-bold" >
            <a href="#">Gowtham A</a>
           {/* Larage Device*/ } 
            <nav className="hidden md:block">
            <ul className="flex  space-x-4 ">
                <li className=" hover:text-blue-500 cursor-pointer">Home</li>
                <li className=" hover:text-blue-500 cursor-pointer">About</li>
                <li className=" hover:text-blue-500 cursor-pointer">Projects</li>
                <li className=" hover:text-blue-500 cursor-pointer">Contact</li>
                
            </ul>
            </nav>

            {/* Medium Device*/ }
            {taggleMenu &&<nav className="block md:hidden">
            <ul className=" flex-col fixed top-10 left-0 bg-gray-500 w-full  justify-center items-center space-y-2 text-center">
                <li className=" hover:text-blue-500 cursor-pointer  border-white border-b-2">Home</li>
                <li className=" hover:text-blue-500 cursor-pointer border-white border-b-2">About</li>
                <li className=" hover:text-blue-500 cursor-pointer border-white border-b-2">Projects</li>
                <li className=" hover:text-blue-500 cursor-pointer ">Contact</li>
                
            </ul>

            </nav>}

            <button onClick={()=>{setTaggelMenu(!taggleMenu)}} className='block md:hidden'><Bars3Icon className='text-white font-bold h-5'></Bars3Icon></button>
        </header>
    )
}