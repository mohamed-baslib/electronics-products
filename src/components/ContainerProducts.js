import Product from "./Product";

export default function ContainerProducts({ addProduct }) {
  console.log("ContainerProducts");

  const productsData = [
    {
      image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
      productName: "سامسونج S25 Ultra",
      productPrice: 1500,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/product2.jpg`,
      productName: "ايفون 14 برو ماكس",
      productPrice: 1100,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/product3.jpg`,
      productName: "ماك بوك برو 16",
      productPrice: 2500,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/product4.jpg`,
      productName: "سماعة راس",
      productPrice: 100,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/product5.jpg`,
      productName: "شاحن باور بانك",
      productPrice: 30,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/product6.jpg`,
      productName: "سامسونح تاب S8 Ultra",
      productPrice: 1000,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
      productName: "بلاستيشن 5",
      productPrice: 500,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
      productName: "شاشة سامسونج 25انش",
      productPrice: 600,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/product9.jpg`,
      productName: "ساعة ابل",
      productPrice: 450,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/product10.jpg`,
      productName: "كاميرا كانون",
      productPrice: 2000,
    },
  ];
  return (
    <div className="container-products">
      {productsData.map((pro, index) => {
        return (
          <Product
            key={index}
            idProduct={index}
            image={pro.image}
            productName={pro.productName}
            productPrice={pro.productPrice}
            addProduct={addProduct}
          />
        );
      })}
    </div>
  );
}
