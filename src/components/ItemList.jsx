import Item from './Item'
import { Container } from '@chakra-ui/react'
import Products from '../products.json'

const ItemList = () => {
  const list = Products.products
  return (
    <>
    <Container maxW='max-content' alignItems='center'>
      {list.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
          stock={product.stock}
          category={product.category}
        />
      ))}
    </Container>
    </>
  )
}

export default ItemList