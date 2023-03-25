import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../contexts/ShoppingCartContext'
import { Container } from '@chakra-ui/react'

const ItemDetail = ({item}) => {
  const { addToCart } = useContext(CartContext)
  const [ stock, setStock ] = useState(1)
  function onAdd(item) {
    addToCart(item, stock)
  }
  return (
    <>
      <Container>
        <Center>
          <Card maxW='sm' key={item.id} className="card-main">
            <CardBody>
              <Image alt={item.name} borderRadius='lg'src={item.image}/>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{item.name}</Heading>
                <Text>Description: {item.description}</Text>
                <Text>Category: {item.category}</Text>
                <Text>Stock: {item.stock}</Text>
                <Text color='blue' fontSize='2xl'>$ {item.price}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <ItemCount stockProd={item.stock}  stock={stock}  setStock={setStock}/>
                <Button className="AgregarCarrito"  onClick={() => onAdd(item)}>
                  <Text>Add to cart</Text>
                </Button>
            </CardFooter>
          </Card>
        </Center>
      </Container>
    </>
  )
}

export default ItemDetail