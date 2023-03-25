import { CartContext } from '../contexts/ShoppingCartContext'
import { useContext } from 'react'
import { Button } from '@chakra-ui/react'

const CartWidget = () => {
  const { cart } = useContext(CartContext)
  return (
    <div>
      <Button size="md" variant="outline">
        <span className="material-symbols-outlined">add_shopping_cart</span>
        <span>{cart.length}</span>
      </Button>
    </div>
  )
}

export default CartWidget