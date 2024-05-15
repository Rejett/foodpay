import React from 'react'
import { useCart } from '../../hooks/useCart'
import { Container } from './styled'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

export default function MyOrder() {
  const { cart } = useCart()

  return (
    <Container to='/cart'>
      <span>Meu Pedido</span>
      <CartIcon />
      {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
    </Container>
  )
}
