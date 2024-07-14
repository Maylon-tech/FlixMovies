import { Link } from 'react-router-dom'
import './styles.css'

export function Header() {
   return (
      <header>
         <Link 
            to="/"
            className='logo'
         >
            Prime Flix
         </Link>

         <Link 
            to="/favoritos" 
            className='favoritos'
         >
            Meus Filmes
         </Link>
      </header>
   )
}