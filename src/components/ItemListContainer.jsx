import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import Products from '../products.json'
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams()
  const [ products, setProducts] = useState(1)
  const getProducts = () => {
    /*const db = getFirestore();
    const queryBase = collection(db, "items");
    const querySnapshot = category ? query(queryBase, where("category", "==",category)) : queryBase;
    getDocs(querySnapshot).then((response) => {
      console.log(response.docs);
      const data = response.docs.map((doc) => {
        return {id: doc.id, ...doc.data()}
      })
      setProductList(data);
    })*/
    return new Promise((resolve, reject)=>{
      if (Products.length === 0){
        reject(new Error("Products not found"))
      }
      resolve(Products)
    })
  }
  useEffect(()=>{
    getProducts().then((product)=> setProducts(product))
  }, [category])
  //const catFilter = products.filter((product) => product.category === category)
/*  useEffect(()=>{
    getProducts()
  },[category])

  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, "items");
    const querySnapshot = categoryName ? query(queryBase, where("category", "==",category)) : queryBase;
    getDocs(querySnapshot).then((response) => {
      console.log(response.docs);
      const data = response.docs.map((doc) => {
        return {id: doc.id, ...doc.data()}
      })
      setProducts(data);
    })
  }*/
  return (
    <>
      <ItemList list={products} />
    </>
  )
}

export default ItemListContainer