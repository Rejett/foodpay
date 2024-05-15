import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'
import { useSnack } from '../../../hooks/useSnacks'
export default function SodaPage() {
  const { drinks } = useSnack()
  return (
    <>
      <Head title='Refrigerante' />
      <SnackTitle title='Refrigerantes' />
      <Snacks snack={drinks} />
    </>
  )
}
