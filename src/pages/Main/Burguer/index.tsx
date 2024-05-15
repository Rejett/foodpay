import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'
import { useSnack } from '../../../hooks/useSnacks'

export default function Burguer() {
  const { burgers } = useSnack()

  return (
    <>
      <Head title='Humbúrgueres' />
      <SnackTitle title='Humbúrgueres' />
      <Snacks snack={burgers} />
    </>
  )
}
