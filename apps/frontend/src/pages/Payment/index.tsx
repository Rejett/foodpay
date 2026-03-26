import React from 'react'
import { Container } from './styled'
import Head from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import FormPayment from './FormPayment'

export default function PaymentPage() {
  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <FormPayment />
    </Container>
  )
}
