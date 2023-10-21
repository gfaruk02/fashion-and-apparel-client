import { useLoaderData, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const loadProduct = useLoaderData();
   const navigate = useNavigate()
    const { _id, name, brand, type, price, category, description, rating, photo } = loadProduct;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const product = { name, brand, type, price, category, description, rating, photo }
        // console.log(name,brand,type,price,description,rating,photo);
        console.log(product);

        fetch(`https://assignment-10-fashion-and-apparel-server-side-ibp4irthk.vercel.app/product/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Successfully!',
                        text: 'Update Coffee Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate(`/brandproduct/${brand}`)
                }
                form.reset();
            })
    }
    return (
        <div className="mx-auto w-full md:w-3/4 mt-8 pt-4 rounded-lg bg-green-200">
            <h1 className='text-center text-3xl text-green-700 font-bold'> Update Product</h1>
            <form onSubmit={handleUpdateProduct} className="w-3/4 mx-auto pt-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={name} type="text" name="name" placeholder=" Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Brand Name</span>
                        </label>
                        <select defaultValue={brand} className="select select-bordered" id="brand" name="brand">
                            <option disabled selected>Select Brand Name</option>
                            <option value="Nike">Nike</option>
                            <option value="Adidas">Adidas</option>
                            <option value="Gucci">Gucci</option>
                            <option value="Zara">Zara</option>
                            <option value="H&M">H&M</option>
                            <option value="Levi's">Levi's</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 justify-center">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Product Type</span>
                        </label>
                        <select className="select select-bordered" id="type" name="type" defaultValue={type}>
                            <option disabled selected>Select Product Type</option>
                            <option value="Dresses">Dresses</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Suit">Suit</option>
                            <option value="Shirt">Shirt</option>
                            <option value="Skirt">Skirt</option>
                            <option value="Uniform">Uniform</option>
                            <option value="Beg">Beg</option>
                            <option value="Boot">Boot</option>
                            <option value="Sportswear">Sportswear</option>
                            <option value="Jacket">Jacket</option>
                            <option value="Watch">Watch</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Category</span>
                        </label>
                        <select className="select select-bordered" id="category" name="category" defaultValue={category}>
                            <option disabled selected>Select Category</option>
                            <option value="women">women's fashion</option>
                            <option value="men">Men's fashion</option>
                            <option value="kids">Kid's fashion</option>
                            <option value="accessories">Accessories</option>

                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Short description</span>
                        </label>
                        <label className="input-group ">
                            <input defaultValue={description} type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">price</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={price} type="number" name="price" placeholder="price " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 justify-center">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={rating} type="number" name="rating" placeholder="Rating max 5 " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={photo} type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block my-10 bg-green-700  text-white hover:bg-green-500" type="submit" value="Update Product" />

            </form>
        </div>
    );
};

export default UpdateProduct;
UpdateProduct.propTypes = {
    loadProduct: PropTypes.node
}