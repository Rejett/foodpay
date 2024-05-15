import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'
import { useSnack } from '../../../hooks/useSnacks'

export default function IcePage() {
  const { iceCream } = useSnack()
  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle title='Sorvetes' />
      <Snacks snack={iceCream} />
    </>
  )
}
