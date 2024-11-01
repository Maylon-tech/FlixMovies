import { useEffect, useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Favoritos() {
   const [filmes, setFilmes] = useState([])

   useEffect(() => {
      const minhaLista = localStorage.getItem("@primeFlix")

      setFilmes(JSON.parse(minhaLista) || [])
   }, [])

   function excluirFilme(id) {
      
      let filtroFilmes = filmes.filter((item) => {
         return (item.id !== id)
      })

      setFilmes(filtroFilmes)
      localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes))
      toast.success("Filme excluido com sucesso.")
   }

   return (
      <div className='meus-filmes'>
         <h1>Meus Filmes</h1>

         {
            filmes.length === 0 && (
               <div className="sem-filmes">
                  <h3>Nenhum filme salvo.</h3>
                  <Link className='redirect-link' to="/">Veja todos filmes.</Link>
               </div>
            )
         }

         <ul className='box-container'>
            {
               filmes.map((item) => {
                  return (
                     <li className='list-content-favorite' key={item.id}>
                        <span>{item.title}</span>
                        <div className="button-content">
                           <Link 
                              className='details'
                              to={`/filmes/${item.id}`}
                           >
                              Ver Detalhes
                           </Link>

                           <button 
                              onClick={() => excluirFilme(item.id)}
                              className='delete-btn'
                           >
                                 Excluir
                              </button>
                        </div>
                     </li>
                  )
               })
            }
         </ul>
      </div>
   )
}

export default Favoritos