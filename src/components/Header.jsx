import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Header = () => {
  const [navMobile, setNavMobile] = useState(false)

  return (
    <>
      <header className="h-[60px] bg-gradient-to-br from-black/90 to-black/40 text-white relative z-50">
        <nav className="h-[60px] flex justify-between items-center max-w-[95%] md:max-w-[90%] m-auto">
          <button
            onClick={() => setNavMobile(!navMobile)}
            className="rounded-full w-[80px] text-white border-2 border-white mr-4 md:hidden"
          >
            {navMobile ? (
              <i className="fa fa-times w-[20px]"></i>
            ) : (
              <i className="fa fa-bars w-[20px]"></i>
            )}
          </button>
          <div>
            <Link to='/'>
              <img src={logo} className="w-[150px]" />
            </Link>
          </div>

          <ul
            className={
              navMobile
                ? 'absolute top-[60px] left-0 w-[63vw] h-[100vh] bg-black flex flex-col py-8 text-center'
                : 'hidden md:flex md:items-center'
            }
          >
            <li className="py-4">
              <Link to="/" className="md:ml-5">
                Home
              </Link>
            </li>
            <li className="py-4">
              <Link to="/" className="md:ml-5">
                Séries
              </Link>
            </li>
            <li className="py-4">
              <Link to="/" className="md:ml-5">
                Filmes
              </Link>
            </li>
            <li className="py-4">
              <Link to="/" className="md:ml-5">
                Páginas
              </Link>
            </li>
            <li className="py-4">
              <Link to="/" className="md:ml-5">
                Preços
              </Link>
            </li>
            <li className="py-4">
              <Link to="/" className="md:ml-5">
                Contato
              </Link>
            </li>
          </ul>

          <div className="flex items-center">
            <i className="hidden p-2 ml-8 duration-300 border-2 rounded-full cursor-pointer fa fa-search md:block hover:scale-110"></i>
            <i className="p-2 ml-8 duration-300 border-2 rounded-full cursor-pointer fa fa-bell hover:scale-110 hover:red"></i>
            <i className="p-2 ml-8 duration-300 border-2 rounded-full cursor-pointer fa fa-user hover:scale-110"></i>
          </div>
          <button className="hidden text-lg font-semibold border border-red-300 md:block hover:scale-105">
            Assinar agora
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
