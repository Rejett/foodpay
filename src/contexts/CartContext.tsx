import { useState, createContext, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'
import { snackEmoji } from '../helper/snackEmoji'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackCartIncrement: (snack: Snack) => void
  snackCartDecrement: (snack: Snack) => void
  confirmOrder: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {
    const snackExists = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

    if (snackExists) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }
        return item
      })
      toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
      setCart(newCart)
      return
    }

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack]
    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
    setCart(newCart)
  }

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))

    toast.error(`${snackEmoji(snack.name)} ${snack.name} foi removido dos Pedidos!`)
    setCart(newCart)
  }

  function updateSnackQuantity(snack: Snack, newQuantity: number) {
    if (newQuantity <= 0) return

    const snackExistInCart = cart.find((item) => item.id === snack.id && item.snack === snack.snack)

    if (!snackExistInCart) return

    const newCart = cart.map((item) => {
      if (item.id === snackExistInCart.id && item.snack === snackExistInCart.snack) {
        return {
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity,
        }
      }

      return item
    })
    setCart(newCart)
  }

  function snackCartIncrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity + 1)
  }

  function snackCartDecrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity - 1)
  }

  function confirmOrder() {
    //
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartDecrement,
        snackCartIncrement,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
