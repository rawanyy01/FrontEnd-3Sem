import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsuarioProvider from './context/UsuarioProvider.jsx'
import { ProdutoContext } from './context/ProdutoContext.jsx'
import ProdutoProvider from './context/ProdutoProvider.jsx'
import CadastroProduto from './components/cadastroproduto/CadastroProduto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <ProdutoProvider>
        <App />
      </ProdutoProvider>
    </UsuarioProvider>
  </StrictMode>,
)
