import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import Burguer from './pages/Main/Burguer'
import PizzaPage from './pages/Main/Pizza'
import IcePage from './pages/Main/IceCream'
import SodaPage from './pages/Main/Soda'
import MyCartPage from './pages/MyCart'
import PaymentPage from './pages/Payment'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Burguer />} />
        <Route path='/pizza' element={<PizzaPage />} />
        <Route path='/sorvete' element={<IcePage />} />
        <Route path='/bebidas' element={<SodaPage />} />
      </Route>
      <Route path='/cart' element={<MyCartPage />} />
      <Route path='/payment' element={<PaymentPage />} />
    </Routes>
  )
}
