import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home"
import Filme from "./pages/filme"
import { Header } from "./components/header"
import Error from "./pages/Error"
import Favoritos from "./pages/Favoritos"
import About from "./pages/about"

const  RoutesApp = () => {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/filmes/:id" element={ <Filme />} />
            <Route path="/favoritos" element={ <Favoritos /> } />
            <Route path="*" element={ <Error/> } />
            <Route path="/about" element={ <About />} />
         </Routes>
      </BrowserRouter>
   )
}

export default RoutesApp