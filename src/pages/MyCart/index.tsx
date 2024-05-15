import React from 'react'
import { Container } from './styled'
import Head from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import Table from './Table'
import ConfirmOrder from '../../components/ConfirmOrder'
import { useCart } from '../../hooks/useCart'

export default function MyCartPage() {
  const { cart } = useCart()
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
      <Table />
      {cart.length > 0 && <ConfirmOrder />}
    </Container>
  )
}
