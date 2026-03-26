import { Title } from './styled'

interface SnackTitleProps {
  title: string
}

export default function SnackTitle({ title }: SnackTitleProps) {
  return <Title>{title}</Title>
}
