import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api"
import './styles.css'
import { toast } from 'react-toastify'

const Filme = () => {
   const navigate = useNavigate()
   const { id } = useParams()
   const [filme, setFilme] = useState({})
   const [loading, setLoading] = useState(true)

   
   useEffect(() => {
      async function loadFilme() {
         await api.get(`/movie/${id}`, {
            params: {
               api_key: "d926910f0ca7ec25b2cf76e00456f503",
               language: "pt-BR",
               page: 1,
            }
         })
         .then((response) => {
            setFilme(response.data)
            setLoading(false)
         })
         .catch(() => {
            console.log("FILME NAO ENCONTRADO")
            navigate("/", {replace: true})
            return
         })
      }

      loadFilme()

      return () => {
         console.log("SEU Componente foi Desmontado..")
      }
   }, [navigate, id])

   function salvarFilme() {
      const minhaLista = localStorage.getItem("@primeFlix")

      let filmesSalvos = JSON.parse(minhaLista) || []
      // Verifica se o filme já está na lista de favoritos.
      const hasFilmes = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

      if(hasFilmes) {
         toast.warn("Esse filma ja esta na sua lista.")
         return
      }

      filmesSalvos.push(filme)
      localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos))
      toast.success("Filmes Salvos com sucesso.....")

   }

   if(loading) {
      <div className="filme-info">
         <h1>Carregando detalhes ...</h1>
      </div>
   }
   

   return (
      <div className="filme-info">
         <h1 className="">{filme.title} </h1>
         <img
            src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} 
            alt={filme.title}
         />

         <h3 className="">Sinopse</h3>
         <span className="">{filme.overview}</span>

         <strong>Avaliação{filme.vote_average} / 10</strong>

         <div className="area-buttons">

            <button
               onClick={() => salvarFilme()}
            
            >
               Salvar
            </button>

            <button>
               <a 
                  href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
                  target="_blank"
                  rel="external"
               >
                  Trailer
               </a>
            </button>
         </div>
      </div>
   )
}

export default Filme