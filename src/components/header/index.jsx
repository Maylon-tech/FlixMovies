import { Link } from 'react-router-dom'
import './styles.css'

export function Header() {
   return (
      <header>
         <nav>
            <Link 
               to="/"
               className='logo'
            >
               Prime Flix
            </Link>

            <Link 
               to="/about"
               className='about'
            >
               Sobre
            </Link>
         </nav>

         <Link 
            to="/favoritos" 
            className='favoritos'
         >
            Meus Filmes
         </Link>
      </header>
   )
}