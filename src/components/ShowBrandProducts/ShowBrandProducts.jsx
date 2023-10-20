import { useLoaderData, useParams } from "react-router-dom";
import Brandproduct from "./Brandproduct";


const ShowBrandProducts = () => {
    const products = useLoaderData();

    const {brand} = useParams();
    // console.log('ShowBrandProducts', products);
    const brandproducts = products.filter(product=> product.brand === brand);
    // if{products.brand === brand}
    // const product = products?.filter(product=> product.brand === brand)?.map(item=> console.log(item.name));
    // console.log(brandproducts);
    return (
        <div>
          <div className="carousel w-full h-[90vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={'https://i.ibb.co/qr5PMJj/hm2.jpg'} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={'https://i.ibb.co/rmgrFbm/up-adidas-1.jpg'} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={'https://i.ibb.co/F4HzTBn/hm3.jpg'} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={'https://i.ibb.co/nbRPyS3/IMG-8850.jpg'} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-2">
            {brandproducts.map(brandItem=> <Brandproduct key={brandItem._id} brandItem={brandItem}></Brandproduct> )}
            </div>
        </div>
    );
};

export default ShowBrandProducts;