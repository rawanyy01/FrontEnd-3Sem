import './App.css'
import CadastroProdutopage from './pages/cadastroproduto/cadastroprodutopage'
import HomePage from './pages/home/homepage'
import QuemSomospage from './pages/quemsomos/quemsomospasge'
import CadastroFrutaPage from './pages/cadastrofruta/cadastrofrutapage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './componentes/header/header'

export default function App() {
  return(
    <>

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route element={<HomePage/>} path= '/' />
        <Route element={<QuemSomospage/>} path= '/quemsomos' />
        <Route element={<CadastroProdutopage/>} path= '/produto' />
        <Route element={<CadastroFrutaPage/>} path= '/fruta' />
      </Routes>
    </BrowserRouter>

   
    </>
  )
}
