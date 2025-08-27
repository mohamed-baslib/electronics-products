export default function ShopinList({show, isShow, newProducts, totalProduct, removeProduct, plusOrMinCount}) {
      console.log("ShopinList")

  return (
    <div className="container-list" style={show ? {display:"flex"} : {display:"none"} }>
      <div className="shoping-list">

        <div className="list">{newProducts.map((product, index) => (
          <div key={index} className="product">
      <div className="photo">
        <img src={product.image} alt="product" />
      </div>
      <div className="count">
          <span onClick={() => {plusOrMinCount(product, -1)}}>-</span>{product.countProduct}<span onClick={() => {plusOrMinCount(product, 1)}}>+</span>
      </div>
      <div className="info">
        <h4 className="product-name">
          <bdi>{product.productName}</bdi>
        </h4>
        <p className="price" price={product.productPrice}>
          ${product.productPrice}
        </p>
        <button className="btn-remove" onClick={() => {
            removeProduct(index)
        }}>حذف</button>
      </div>
    </div>
        ))}
        </div>

        <div className="total">
        { totalProduct !== 0 ? `$ ${totalProduct} المبلغ الكلي` : "السلة فارغة"}
        </div>
        <div className="btn-div">
          <button className="btn" onClick={() => {
            isShow(false)
          }}>
            العودة
          </button>
          <button className="btn btn-remove" onClick={() => {
            removeProduct();
          }}>
            حذف الكل
          </button>
        </div>
      </div>
    </div>
  );
}
