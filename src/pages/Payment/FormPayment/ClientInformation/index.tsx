import React from 'react'
import { Container } from './styled'

export default function ClientInformation() {
  return (
    <Container>
      <h2>Informações Pessoais:</h2>
      <label htmlFor='client_name'>Nome Completo</label>
      <input type='text' id='client_name' name='client_name' />
      <div>
        <div>
          <label htmlFor='client_phone'>Telefone/Celular</label>
          <input type='text' id='client_phone' name='client_phone' />
        </div>
        <div>
          <label htmlFor='client_document'>CPF/CPNJ</label>
          <input type='text' id='client_document' name='client_document' />
        </div>
      </div>
    </Container>
  )
}
