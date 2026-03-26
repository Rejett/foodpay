import AdressInformation from './AdressInformation'
import ClientInformation from './ClientInformation'
import MethodPayment from './MethodPayment'
import { Container } from './styled'

export default function FormPayment() {
  return (
    <Container>
      <ClientInformation />
      <AdressInformation />
      <MethodPayment />
    </Container>
  )
}
