import CartWidget from './CartWidget'
import { Link } from "react-router-dom"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { Box, Container, Flex, Heading, Img, Menu, MenuButton, MenuList, Spacer, Stack, Button, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  const velas = 'Velas'
  const cartas = 'Cartas'
  const inciensos = 'Inciensos'
  return (
    <>
    <Stack direction="row">
      <Container maxW='container.xl' bg='purple.600' color='pink'>
        <Flex alignItems="center" gap="2">
          <Heading>
            <Img boxSize='65px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPS0e-k76CO32jhsiJPfJ7FFvnjZgm84Trb-7ME8zQYveYbohyvJZvasCGhjDaK3RTPpA&usqp=CAU"/>        
          </Heading>  
          <Box p="10" w="300px" h="100">
            <Heading size="md">
              <Link to={"/"}>Magik</Link>
            </Heading>
          </Box>
          <Spacer/>
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton as={Button} size="lg" variant="outline" _hover={{
                  background: "grey",
                  color: "black",
                  }} m="5">Catalogue</MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton as={Button} ssize="lg" variant="outline" _hover={{
                  background: "grey",
                  color: "black",
                }} m="5" rightIcon={<ChevronDownIcon/>}>Categories</MenuButton>
               <MenuList color="black" className="menu-list">
                <Link to={`/category/${velas}`}><MenuItem>Velas</MenuItem></Link>
                <Link to={`/category/${cartas}`}><MenuItem>Cartas</MenuItem></Link>
                <Link to={`/category/${inciensos}`}><MenuItem>Inciensos</MenuItem></Link>
              </MenuList>
              {/*{categorias.map((cat)=>{
                <Link to={`/category/${cat}`}><MenuItem>{cat.name}</MenuItem></Link>
              })}*/}
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </Stack>
    </>
  )
}

export default NavBar