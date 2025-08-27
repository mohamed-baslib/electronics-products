
export default function Header({isShow, shopingCount}) {
    console.log("Header");

  return (
    <header>
      <h1 className="store-name">متجر اجهزة الكترونية</h1>
      <i onClick={() => {
        isShow(true)
      }} className="shoping fas fa-shopping-cart">
        <span>{shopingCount}</span>
      </i>
    </header>
  );
}
