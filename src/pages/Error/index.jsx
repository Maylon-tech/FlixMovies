import { Link } from "react-router-dom"
import '../../pages/Error/styles.css'

function Error() {
   return (
      <div className="not-found">
         <h1>404...</h1>
         <h2>Pagina nao encontrado!</h2>

         <Link to="/">Veja todos filmes.</Link>
      </div>
   )
}

export default Error

