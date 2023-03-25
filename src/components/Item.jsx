import { Card, Heading, CardBody, Text, CardFooter, Button, Center, Stack, Image, Divider } from '@chakra-ui/react'
import { Link } from 'react'

const Item = ({ id, name, image, price, stock, category }) => {
  return (
    <>
      <div key={id}>
        <Center p="1rem">
          <Card align='center' className='card-main'>
            <CardBody>
              <Image borderRadius="lg" src={image} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>
                <Text>Category: {category}</Text>
                <Text>Stock: {stock}</Text>
                <Text>Price: $ {price}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className='card-footer'>
              <Center className='btn-center'>
                
                  <Link to={`/item/${id}`}>Details</Link>
                
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </>
  )
}

export default Item