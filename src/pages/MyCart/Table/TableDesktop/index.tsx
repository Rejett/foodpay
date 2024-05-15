import { currencyFormater } from '../../../../helper/formatterCurrency'
import { FaTrashAlt } from 'react-icons/fa'
import { useCart } from '../../../../hooks/useCart'
import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'
import { Container } from './styled'

export default function TableDesktop() {
  const { cart, removeSnackFromCart, snackCartDecrement, snackCartIncrement } = useCart()
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Quantidade</th>
            <th>SubTotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormater(item.price)}</span>
              </td>
              <td>
                <div>
                  <button type='button' onClick={() => snackCartDecrement(item)}>
                    <img src={minusImg} alt='Remover Quantidade' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => snackCartIncrement(item)}>
                    <img src={plusImg} alt='Adicionar Quantidade' />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormater(item.subtotal)}</h5>
              </td>
              <td>
                <button type='button' onClick={() => removeSnackFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
