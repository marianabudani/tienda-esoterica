import { useState, createContext } from 'react';

export  const CartContext = createContext(null);


export const ShoppingCartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
    // Con este state calculo la cantidad de productos que se muestran en el span del CartWidget
    const [totalItemsState, setTotalItemsState] = useState(0);
    const addToCart = (item , cantidad) => {
        const itemInCart = isInCart(item.id)
        setTotalItemsState(totalItemsState + cantidad);
        if (itemInCart) {
            itemInCart.cantidad = itemInCart.cantidad += cantidad;            
        }else {
            setCart([...cart, {...item, cantidad}]);
        }
    };
    
    const isInCart = (id) => {
        return cart.some((item)=>  item.id === id);
    };
    const clear = () => {
        setCart([]);
    }

    const removeItem = (productId) => {
        let nuevoArreglo = [];
            cart.forEach(product => {
                if (product.id === productId) {
                    nuevoArreglo.push()
                } 
            });
    setCart(nuevoArreglo);
    };

    return (
      <CartContext.Provider value={{ cart, addToCart , removeItem }}> 
        { children }
      </CartContext.Provider>
    )
}