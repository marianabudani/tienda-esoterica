import { Button, Center, Text } from "@chakra-ui/react"

const ItemCount = ({stockProd, stock, setStock}) => {
  const sum = () => stock <= stockProd - 1 ? setStock(stock + 1):alert('Out of stock')
  const reduce = () => stock > 0 ? setStock(stock - 1) : alert('No stock')
  return (
    <>
      <div>
        <Center>
          <Button onClick={reduce}>-</Button>
          <Text>{stock}</Text>
          <Button onClick={sum}>+</Button>
        </Center>
      </div>
    </>
  )
}

export default ItemCount