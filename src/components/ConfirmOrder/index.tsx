import { Link } from 'react-router-dom'
import { currencyFormater } from '../../helper/formatterCurrency'
import { useCart } from '../../hooks/useCart'
import { Container } from './styled'

export default function ConfirmOrder() {
  const { cart } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container>
      <Link to='/payment'>
        <button type='button'>Finalizar Pedido!</button>
      </Link>
      <span>
        Total <strong>{currencyFormater(totalAmount)}</strong>
      </span>
    </Container>
  )
}
