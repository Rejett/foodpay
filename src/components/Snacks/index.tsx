import { currencyFormater } from '../../helper/formatterCurrency'
import { useCart } from '../../hooks/useCart'
import { SnackData } from '../../interfaces/SnackData'
import SkeletonSnacks from './SkeletonSnacks'
import { Container } from './styled'
import { FaPlus } from 'react-icons/fa6'

interface SnacksProps {
  snack: SnackData[]
}
export default function Snacks({ snack }: SnacksProps) {
  const { cart, addSnackIntoCart } = useCart()

  return (
    <Container>
      {!snack.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnacks key={n} />)
        : snack.map((snack) => {
            const snackExists = cart.find(
              (item) => item.snack === snack.snack && item.id === snack.id,
            )
            console.log(cart)
            return (
              <div key={snack.id} className='snack'>
                {snackExists && <span>{snackExists.quantity}</span>}
                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.description}</p>
                <div>
                  <strong>{currencyFormater(snack.price)}</strong>
                  <button type='button' onClick={() => addSnackIntoCart(snack)}>
                    <FaPlus />
                  </button>
                </div>
              </div>
            )
          })}
    </Container>
  )
}
