export default function Product({image, productName, productPrice, addProduct, idProduct}) {
    console.log("Product")

  return (
    <div className="product">
      <div className="photo">
        <img src={image} alt="product" />
      </div>
      <div className="info">
        <h4 className="product-name">
          <bdi>{productName}</bdi>
        </h4>
        <p className="price" price={productPrice}>
          ${productPrice}
        </p>
        <button className="btn-add" onClick={() => {
            addProduct({idProduct, image, productName, productPrice, countProduct: 1})
        }}>اضافة الى السلة</button>
      </div>
    </div>
  );
}
