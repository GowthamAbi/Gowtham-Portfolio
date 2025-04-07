import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-serif font-bold fixed top-0 w-full z-50 shadow-md">
      <a href="#home" className="text-xl">Gowtham A</a>

      {/* Large Devices */}
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="hover:text-black transition duration-300"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Hamburger Menu */}
      <button onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden">
        <Bars3Icon className="h-6 w-6 text-white" />
      </button>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="absolute top-16 left-0 w-full bg-gray-800 text-center text-white py-4 space-y-4 md:hidden">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setToggleMenu(false)}
              className="block hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
