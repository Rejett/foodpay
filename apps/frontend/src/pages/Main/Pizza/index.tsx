import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'
import { useSnack } from '../../../hooks/useSnacks'

export default function PizzaPage() {
  const { pizzas } = useSnack()
  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle title='Pizzas' />
      <Snacks snack={pizzas} />
    </>
  )
}
