import { useLoaderData, useParams } from "react-router-dom";
import Brandproduct from "./Brandproduct";


const ShowBrandProducts = () => {
    const products = useLoaderData();
    // const {brand} =products
    const {brand} = useParams();
    // console.log(products);
    const brandproducts = products.filter(product=> product.brand === brand);
    // if{products.brand === brand}
    // const product = products?.filter(product=> product.brand === brand)?.map(item=> console.log(item.name));
    console.log(brandproducts);
    return (
        <div>
            <h1>Product show page</h1>
            <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-2">
            {brandproducts.map(brandItem=> <Brandproduct key={brandItem._id} brandItem={brandItem}></Brandproduct> )}
            </div>
            

        </div>
    );
};

export default ShowBrandProducts;