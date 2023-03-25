import { useContext } from "react"
import { CartContext } from '../contexts/ShoppingCartContext'
import { Link } from 'react-router-dom'
import Product from '../products.json'
import { Button, Spacer, Text } from "@chakra-ui/react"
import SendOrder from "./SendOrder"

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext)
  const createOrder = () => {
    const db = getFirestore();
      const order = {
        buyer: {
            name:'Yael',
            phone: '673567',
            email: 'blabla@test.com'
        },
        items: cart, 
        total: cart.reduce((valorPasado, valorActual) => valorPasado + valorActual.price 
            * valorActual.cantidad , 0),
        date: moment().format('DD/MM/YYYY, h:mm:ss a'),
      };
      const query = collection(db, 'orders');
      addDoc(query, order)  
      .then(({id}) => {
        alert(`Compra exitosa `)
      })
      .catch(() => alert('No pudiste generar tu compra, intentalo más tarde'))
  }
  return (
    <>
      <div>
        {cart.length === 0 ?(
          <>
            <Link to={'/'}> Back </Link> 
          </>
        ):(
          <>
            {cart.map((item)=>(
              <div key={item.id}>
              <img src={item.image} alt={item.name}/>
              <h3>{item.name}</h3>
              <Text>Price : $ {item.price}</Text>
              <Text>Quantity :{item.cantidad}</Text>
              <Text>Total : $ {item.price * item.cantidad}</Text>
              <Spacer/>
              <Button className="removeItem" onClick={() => removeItem(item.id)}> Delete</Button>
              </div>
            ))}
            <Spacer/>
            <SendOrder pedido={createOrder}>Buy</SendOrder>
            <Link className="volverAcomprar" to={'/catalogue'}> Back</Link>  
          </>
        )}
      </div>
    </>
  )
}

export default Cart