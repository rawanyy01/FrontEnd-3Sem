import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import MyPage from './components/mypage/Mypage'
import Header from './components/header/Header'
import CadastroProduto from './components/cadastroproduto/CadastroProduto'
import ListarProduto from './components/listarproduto/ListarProduto'
import PrivateRoute from "./routes/PrivateRoute"

function App() {
  return (
    <>
      {/* <CadastroProduto />
      <ListarProduto /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/perfil' element={<Perfil />} />

          <Route path='/cadProduto' element={
            <PrivateRoute>
              <CadastroProduto />
            </PrivateRoute>

          } />

          <Route path='/mypage' element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
