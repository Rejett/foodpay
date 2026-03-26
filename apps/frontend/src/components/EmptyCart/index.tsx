import React from 'react'
import { Button, Container } from './styled'
import manAndBurger from '../../assets/man-and-burger.svg'

interface EmptyCartProps {
  title: string
}

export default function EmptyCart({ title }: EmptyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o Cardápio</Button>
      <img src={manAndBurger} alt='Homem com hambúguer' />
    </Container>
  )
}
