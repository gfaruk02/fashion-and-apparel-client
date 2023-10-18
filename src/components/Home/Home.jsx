import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" text-center  my-10">
                
            <h1 className="text-4xl font-bold">Most Popular Brand</h1>
            <div className=" mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between gap-2"> 
                {/* brande name and image */}
            <div className="card w-48 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={'https://i.ibb.co/PCJQLR8/1512076803-93-Nike-mobile.jpg'} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Nike</h2>
            </div>
            </div> 
            {/* end band */}
                {/* brande name and image */}
            <div className="card w-52 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={'https://i.ibb.co/1GGJ5hT/Adidas-logo.png'} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Adidas</h2>
            </div>
            </div> 
            {/* end band */}
                {/* brande name and image */}
            <div className="card w-52 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={'https://i.ibb.co/MGzpQjT/Gucci-Logo.png'} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Gucci</h2>
            </div>
            </div> 
            {/* end band */}
                {/* brande name and image */}
            <div className="card w-52 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={'https://i.ibb.co/bP1ZwBd/Zara-Logo-2008.png'} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Zara</h2>
            </div>
            </div> 
            {/* end band */}
                {/* brande name and image */}
            <div className="card w-52 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={'https://i.ibb.co/2gfCg38/H-M-Logo-svg.png'} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">H&M</h2>
            </div>
            </div> 
            {/* end band */}
                {/* brande name and image */}
            <div className="card w-52 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={'https://i.ibb.co/qrzc3hp/levi-logo-4-82250bd000e1-mobile.jpg'} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Levi's</h2>
            </div>
            </div> 
            {/* end band */}
            </div>
            </div>
        </div>
    );
};

export default Home;