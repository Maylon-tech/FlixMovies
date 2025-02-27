import { useEffect, useState } from "react"
import api from '../../services/api'
import { Link } from "react-router-dom"
import './styles.css'

const Home = () => {
   const [filmes, setFilmes] = useState([])
   const [loading, setLoading] = useState(true)
   useEffect(() => {

      async function loadFilmes() {
         const response = await api.get("movie/now_playing", {
            params: {
               api_key: "d926910f0ca7ec25b2cf76e00456f503",
               language: "pt-BR",
               page: 1,
            }
         })

         setFilmes(response.data.results.slice(0, 10))
         setLoading(false)
      }

      loadFilmes()

   }, [])

   if(loading) {
      return <div className="loading">
         <h2> Carregando filmes...</h2>
      </div>
   }

   return (
      <div className="container">
         <div className="lista-filmes">
            {
               filmes.map((filme) => {
                  return (
                     <article className="" key={filme.id}>
                        <Link to={`/filmes/${filme.id}`}>
                           <img 
                              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} 
                              alt={filme.title} 
                           />
                        </Link>
                        <div className="movie-info">
                           <strong>{filme.title}</strong>
                           <Link to="/favoritos">Meu Favoritos</Link>
                        </div>
                     </article>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Home