import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";

const Home = () => {
    const loadedBrand = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className=" text-center  my-10">
                
            <h1 className="text-4xl font-bold text-green-700">Most Popular Brand </h1>
            <div className=" mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between gap-2"> 
                {
                    loadedBrand?.map(brands => <Brand key={brands._id} brands={brands}>
                    </Brand>)
                }
            </div>
            </div>
<div className="w-full my-8 md:my-16">
                <h1 className="text-4xl font-bold text-green-700 text-center pb-10"> Women's Fashion Collection</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="card w-full bg-green-50 shadow-xl md:col-span-2">
  <figure><img className="w-full h-full" src={'https://i.ibb.co/Z8qkrsJ/ao-phong-nu-adidas-trefoil-cv9888-mau-den-size-l-61a5a819ed03b-30112021112705.jpg'} alt="Shoes" /></figure>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full" src={'https://i.ibb.co/d29JNSY/nk.jpg'} alt="Shoes" /></figure>
  <div className="card-body px-1 py-5">
    <h2 className="text-center">
    NIKE HOOPS ELITE BACKPACK!
    </h2>
  </div>
</div>
 <br />

<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full"  src={'https://i.ibb.co/7ND6zj7/nk2.jpg'} alt="Shoes" /></figure>
  <div className="card-body px-1 py-5">
    <h2 className="text-center">
  Sportswear Phoenix Fleece!
    </h2>
  </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full" src={'https://i.ibb.co/9s4hJFR/gu3.jpg'} alt="Shoes" /></figure>
  <div className="card-body px-1 py-5">
    <h2 className="text-center">
    Thong Sandal With Horsebit!
    </h2>
  </div>
</div>
 <br />

<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full"  src={'https://i.ibb.co/0MHdQJd/http-static-theiconic-com-au-p-adidas-performance-4411-4174991-1.jpg'} alt="Shoes" /></figure>
<div className="card-body px-1 py-5">
    <h2 className="text-center">
    Quickburn Training Tank Top!
    
      <div className="badge badge-secondary ml-2 bg-green-700 text-white border-green-950 ">NEW</div>
    </h2>
  </div>
</div>
</div>
                </div>
                </div>
                {/* <PropularProduct></PropularProduct> */}

<div className="w-full my-8 md:my-16">
<h1 className="text-4xl font-bold text-green-700 text-center pb-10"> New Arrival</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full" src={'https://i.ibb.co/KD13Rhb/zara3.jpg'} alt="Shoes" /></figure>
  <div className="card-body px-1 py-5">
    <h2 className="text-center">
    SHORT PRINTED DRESS
      <div className="badge badge-secondary ml-2 bg-green-700 text-white border-green-950 ">NEW</div>
    </h2>
  </div>
</div>

<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full"  src={'https://i.ibb.co/KVQynfh/li2.jpg'} alt="Shoes" /></figure>
  <div className="card-body px-1 py-5">
    <h2 className="text-center">
    LEVI'S BODYSUIT BABY
      <div className="badge badge-secondary ml-2 bg-green-700 text-white border-green-950 ">NEW</div>
    </h2>
  </div>
</div>


<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full" src={'https://i.ibb.co/8bdpJNs/li5.jpg'} alt="Shoes" /></figure>
  <div className="card-body px-1 py-5">
    <h2 className="text-center">
    ATHLETIC TAPER FIT JEANS
      <div className="badge badge-secondary ml-2 bg-green-700 text-white border-green-950 ">NEW</div>
    </h2>
  </div>
</div>


<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full"  src={'https://i.ibb.co/wcZKbGy/hm4.jpg'} alt="Shoes" /></figure>
<div className="card-body px-1 py-5">
    <h2 className="text-center">
    Square-neck bodycon dress
    
      <div className="badge badge-secondary ml-2 bg-green-700 text-white border-green-950 ">NEW</div>
    </h2>
  </div>

</div>
                </div>
                </div> 
                {/* end new araibel */}
                <div className="w-full my-8 md:my-16">
                <h1 className="text-4xl font-bold text-green-700 text-center pb-10"> Men's Fashion Collection</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="card w-full bg-green-50 shadow-xl md:col-span-2">
  <figure><img className="w-full" src={'https://i.ibb.co/yFgW8Rb/nike1.jpg'} alt="Shoes" /></figure>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full" src={'https://i.ibb.co/Rpg3nLr/71-PJNu-RJo1-L-AC-UY1000.jpg'} alt="Shoes" /></figure>
  <div className="card-body px-1 py-5">
    <h2 className="text-center">
    NIKE HOOPS ELITE BACKPACK!
    </h2>
  </div>
</div>
 <br />

<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full"  src={'https://i.ibb.co/fSQdgSD/nk3.jpg'} alt="Shoes" /></figure>
  <div className="card-body px-1 py-5">
    <h2 className="text-center">
  Sportswear Phoenix Fleece!
    </h2>
  </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full" src={'https://i.ibb.co/M5zpXpM/gc2.jpg'} alt="Shoes" /></figure>
  <div className="card-body px-1 py-5">
    <h2 className="text-center">
    Thong Sandal With Horsebit!
    </h2>
  </div>
</div>
 <br />

<div className="card w-full md:w-80 lg:w-72 bg-green-50 shadow-xl">
  <figure><img className="md:h-64 w-full"  src={'https://i.ibb.co/hfsHzFx/gu4.jpg'} alt="Shoes" /></figure>
<div className="card-body px-1 py-5">
    <h2 className="text-center">
    Quickburn Training Tank Top!
    
    </h2>
  </div>
</div>
</div>
                </div>
                </div>

            </div>

    );
};

export default Home;