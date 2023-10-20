import { useContext } from "react";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";
// import Swal from "sweetalert2";


const Details = () => {
    const { user } = useContext(AuthContext);
    const productDetails = useLoaderData();
    const navigate = useNavigate
    const { _id } = useParams();
    // console.log(_id, productDetails);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const productDetail = productDetails?.find(product => product._id === _id)
        setProduct(productDetail);

    }, [_id, productDetails])
    // console.log('details page ', product);
    // console.log(user.email);

    const handleAddToCart = (product) => {
        // console.log(product);
        const { _id, name, photo, brand, price } = product;
        const newCard = { productId: _id, name, photo, brand, price, email: user.email }
        console.log(newCard);
        if (user) {
            fetch('http://localhost:5000/card', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newCard)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Successfully!',
                            text: 'Data Added in Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })

                    }

                })
        }
        else {
            navigate('/login')
        }
        // fetch('http://localhost:5000/card',{
        //     method: "POST",
        //     headers:{
        //         "content-type" : "application/json"
        //     },
        //     body: JSON.stringify(product)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        //     if(data.insertedId){
        //         Swal.fire({
        //             title: 'Successfully!',
        //             text: 'Data Added in Successfully',
        //             icon: 'success',
        //             confirmButtonText: 'Cool'
        //           })

        //     }

        // })
    }
    return (
        <div>
            <div className=" mt-10 w-full lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-9">
                <div >
                    <img className=" w-full" src={product.photo} alt="" />
                </div>
                <div className="text-center md:text-left mt-16">
                    <h1 className="md-5 text-2xl font-bold "> {product.name}</h1>
                    <p className="pb-3"><span className=" text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Brand:</span>   {product.brand}</p>
                    <p className="pb-3"><span className=" text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Type: </span>  {product.type}</p>
                    <p className="pb-3"> <span className=" text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Category: </span> {product.category}</p>
                    {/* <p> Type: {product.type}</p> */}
                    <p className="pb-3"><span className=" text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Rating:</span>  {product.rating}</p>
                    <p className="pb-3"> <span className=" text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Price:</span>  $ {product.price}</p>
                    <div className="p-3"> <span className=" md:p-0 text-lg antialiased font-medium leading-relaxed text-blue-gray-900">Description:</span>
                        {product.description}
                    </div>
                    <div className="mt-5">
                        <button onClick={() => handleAddToCart(product)} className="bg-slate-400 w-full py-2 rounded-lg"> Add to Cart</button>
                    </div>
                </div>
                <span className="block text-lg antialiased font-medium leading-relaxed text-blue-gray-900"></span>
            </div>
            {/* <div> 
                <marquee> 

                </marquee>
            </div> */}
        </div>

    );
};

export default Details;