import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import MyPage from './components/mypage/Mypage'
import Header from './components/header/Header'
import CadastroProduto from './components/cadastroproduto/CadastroProduto'
import ListarProduto from './components/listarproduto/ListarProduto'

function App() {
  return(
    <>
      <CadastroProduto />
      <ListarProduto />
    {/* <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/mypage' element={<MyPage />} /> 
      </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App
