import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const productDetails = useLoaderData();
    const {_id} = useParams();
    // console.log(_id, productDetails);
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        const productDetail = productDetails?.find(product=>product._id === _id)
        setProduct(productDetail);

    },[_id,productDetails ])
    console.log('details page ', product);
    return (
        <div>
            <div className=" mt-10 w-full lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-9"> 
                <div > 
                <img className="h-[80vh] w-full" src={product.photo} alt="" />
                </div>
                <div className=""> 
                <h1 className="md-5 text-2xl font-bold "> {product.name}</h1>
                <p className="pb-3"><span className=" text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Brand:</span>   {product.brand}</p>
                <p className="pb-3"><span className=" text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Type: </span>  {product.type}</p>
                <p className="pb-3"> <span className=" text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Category: </span> {product.category}</p>
                {/* <p> Type: {product.type}</p> */}
                <p className="pb-3"><span className=" text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Rating:</span>  {product.rating}</p>
                <p className="pb-3"> <span className=" text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Price:</span>  $ {product.price}</p>
                <div className="pb-3"> <span className=" text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Description:</span> 
                 {product.description}
                </div>
                <div className="mt-5">
                    <button className="bg-slate-400 w-full py-2 rounded-lg"> Add to Card</button>
                </div>
                </div>
              <span className="block text-lg antialiased font-medium leading-relaxed text-blue-gray-900"></span>  
            </div>
        </div>
        
    );
};

export default Details;