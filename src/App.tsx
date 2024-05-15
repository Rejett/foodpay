import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import SnackProvider from './contexts/SnackContext'
import { CartProvider } from './contexts/CartContext'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <CartProvider>
            <AppRoutes />
            <ToastContainer />
            <GlobalStyle />
            <Normalize />
          </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
