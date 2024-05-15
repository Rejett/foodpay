import { Container } from './styled'

export default function AdressInformation() {
  return (
    <Container>
      <h2>Endereço de Entrega:</h2>
      <div>
        <div>
          <label htmlFor='cep'>CEP</label>
          <input type='text' id='cep' name='cep' />
        </div>
        <div>
          <label htmlFor='adress'>Endereço</label>
          <input type='text' id='adress' name='adress' />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor='number'>Número</label>
          <input type='text' id='number' name='number' />
        </div>
        <div>
          <label htmlFor='complement'>Complemento</label>
          <input type='text' id='complement' name='complement' />
        </div>
      </div>
    </Container>
  )
}
