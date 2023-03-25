import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Home from './components/Home'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

function App() {

  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/catalogue" element={< ItemListContainer />} />
            <Route exact path="/category/:category" element={ < ItemListContainer />} />
            <Route exact path="/item/:id" element={ < ItemDetailContainer /> } />
            <Route exact path="/cart" element={ < Cart />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App
