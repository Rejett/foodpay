import React from 'react'
import { useCart } from '../../../../hooks/useCart'
import { Container } from './styled'
import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'
import { FaTrashAlt } from 'react-icons/fa'
import { currencyFormater } from '../../../../helper/formatterCurrency'

export default function TableMobile() {
  const { cart, removeSnackFromCart, snackCartDecrement, snackCartIncrement } = useCart()
  return (
    <Container>
      {cart.map((item) => (
        <div key={`${item.snack}-${item.id}`} className='order-item'>
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <div className='tile-price'>
              <h4>{item.name}</h4>
              <span>{currencyFormater(item.price)}</span>
            </div>
            <div>
              <div>
                <button type='button' onClick={() => snackCartDecrement(item)}>
                  <img src={minusImg} alt='Remover Quantidade' />
                </button>
                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                <button type='button' onClick={() => snackCartIncrement(item)}>
                  <img src={plusImg} alt='Adicionar Quantidade' />
                </button>
              </div>
              <button type='button' onClick={() => removeSnackFromCart(item)}>
                <FaTrashAlt />
              </button>
            </div>
            <h5>
              <span>Subtotal</span> {currencyFormater(item.subtotal)}
            </h5>
          </div>
        </div>
      ))}
    </Container>
  )
}
