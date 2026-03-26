import { useEffect, useState, createContext, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { getBurgers, getDrinks, getIceCream, getPizzas } from '../services/api'

export interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  iceCream: SnackData[]
  drinks: SnackData[]
}

export const SnackContext = createContext({} as SnackContextProps)

export interface SnackProviderProps {
  children: ReactNode
}

export default function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [iceCream, setIceCream] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const burgersRequest = await getBurgers()
      const pizzasRequest = await getPizzas()
      const iceCreamRequest = await getIceCream()
      const drinksRequest = await getDrinks()

      const response = [burgersRequest, pizzasRequest, iceCreamRequest, drinksRequest]

      const [burgersResponse, pizzasResponse, iceCreamResponse, drinkResponse] = await Promise.all(
        response,
      )

      setBurgers(burgersResponse.data)
      setPizzas(pizzasResponse.data)
      setIceCream(iceCreamResponse.data)
      setDrinks(drinkResponse.data)
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ burgers, pizzas, iceCream, drinks }}>
      {children}
    </SnackContext.Provider>
  )
}
