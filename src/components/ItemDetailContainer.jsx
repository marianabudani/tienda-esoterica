import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import Products from '../products.json'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [ product, setProduct ] = useState([])

  /*useEffect(() => {
    getItem()
  },[])
  const getItem = () => {
    const db = getFirestore();
    const queryDoc = doc(db, "items", id);
    getDoc(queryDoc).then((res) =>{
        setProduct({id: res.id, ...res.data()});
    }).catch((err) => console.log(err));
  }*/
  useEffect(()=>{
    getItems()
  },[])
  const getItems = () => {
    return new Promise((resolve, reject) => {
      if (Products.length === 0){
        reject(new Error("Products not found"))
      }
      resolve(Products)
    })
  }
  async function fetchProductos() {
    try{
      const productosFetch = await getItems()
    }catch(e){
      console.log(e)
    }
  }
  fetchProductos()
  return (
    <>
      <ItemDetail item={product}/>
    </>
  )
}

export default ItemDetailContainer