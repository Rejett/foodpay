import { Container } from './styled'
import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceIcon } from '../../assets/ice-cream.svg'
import menuIcon from '../../assets/menu.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false)

  console.log('open:', openMenu)

  return (
    <Container isOpenMenu={openMenu}>
      <button type='button' onClick={() => setOpenMenu(!openMenu)}>
        <img src={menuIcon} alt='Botão acesso ao menu' />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <BurguerIcon />
              <span>Hambúrgueres</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/pizza'>
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/bebidas'>
              <SodaIcon />
              <span>Sodas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/sorvete'>
              <IceIcon />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
