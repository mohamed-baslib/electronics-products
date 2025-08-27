import "./ProductsPage.css";
import Header from "./Header";
import ContainerProducts from "./ContainerProducts";
import ShopinList from "./ShopingList";
import { useState } from "react";

export default function ProductsPage() {
  console.log("ProductsPage")

  const [shopingShow, setShopingShow] = useState(false);
  const [cartProducts, setCartProducts] = useState([])
  const count =  cartProducts.reduce((c, item) => c + item.countProduct, 0);
  const total = cartProducts.reduce((sum, item) => sum + (item.productPrice * item.countProduct), 0);

  function changeShopingShow(value) {
    setShopingShow(value);
  }

  function addToCartProducts(product){
    let findProduct = cartProducts.find((item) => item.idProduct === product.idProduct);
    if(findProduct){
      setCartProducts(cartProducts.map((item) => item.idProduct === product.idProduct ? {...item, countProduct: item.countProduct + 1} : item))
    }
    else{
    setCartProducts([...cartProducts, product])
  }
  }

  function removeProducts(id){
    if(id !== undefined)
        setCartProducts(cartProducts.filter(item => item !== cartProducts[id]));
    else
        setCartProducts([]);

  }

  function plusOrMinCount(product, n){
    if (n === 1){
      setCartProducts(cartProducts.map((item) => item.idProduct === product.idProduct ? {...item, countProduct: item.countProduct + 1} : item))
    }
    else {
      if (product.countProduct > 1)
        setCartProducts(cartProducts.map((item) => item.idProduct === product.idProduct ? {...item, countProduct: item.countProduct - 1} : item))
    }
  }


  return (
    <>
      <Header isShow={changeShopingShow} shopingCount={count} />
      <ContainerProducts addProduct={addToCartProducts}/>
      <ShopinList show={shopingShow} isShow={changeShopingShow} newProducts={cartProducts} totalProduct={total} removeProduct={removeProducts} plusOrMinCount={plusOrMinCount}/>
    </>
  );
}
