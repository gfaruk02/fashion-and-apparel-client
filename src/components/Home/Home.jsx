import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
// import { useState } from "react";
import Brand from "../Brand/Brand";


const Home = () => {
    const loadedBrand = useLoaderData()
    // const [brands, setBrands] = useState(loadedBrand)
    return (
        <div>
            <Banner></Banner>
            <div className=" text-center  my-10">
                
            <h1 className="text-4xl font-bold">Most Popular Brand </h1>
            <div className=" mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between gap-2"> 
                {
                    loadedBrand?.map(brands => <Brand key={brands._id} brands={brands}>
                    </Brand>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;