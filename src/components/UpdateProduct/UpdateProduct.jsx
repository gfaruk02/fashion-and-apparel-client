import { useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const loadProduct = useLoaderData();
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

        fetch(`http://localhost:5000/product/${_id}`, {
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
                }
                form.reset();
            })
    }
    return (
        <div className="mx-auto w-full md:w-3/4 pt-10 rounded-lg bg-green-200">
            <h1 className='text-center text-3xl text-green-700 font-bold'> Update Product</h1>
            <form onSubmit={handleUpdateProduct} className="w-1/2 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center py-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={name} type="text" name="name" placeholder=" Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Brand Name</span>
                        </label>
                        <select defaultValue={brand} className="select select-bordered" id="brand" name="brand">
                            <option disabled selected>Select Brand Name</option>
                            <option value="nike">Nike</option>
                            <option value="adidas">Adidas</option>
                            <option value="gucci">Gucci</option>
                            <option value="zara">Zara</option>
                            <option value="h&m">H&M</option>
                            <option value="levis">Levi's</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center py-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Product Type</span>
                        </label>
                        <select className="select select-bordered" id="type" name="type" defaultValue={type}>
                            <option disabled selected>Select Product Type</option>
                            <option value="dresses">Dresses</option>
                            <option value="shoes">Shoes</option>
                            <option value="suit">Suit</option>
                            <option value="shirt">Shirt</option>
                            <option value="skirt">Skirt</option>
                            <option value="uniform">Uniform</option>
                            <option value="beg">Beg</option>
                            <option value="boot">Boot</option>
                            <option value="sportswear">Sportswear</option>
                            <option value="jacket">Jacket</option>
                            <option value="watch">Watch</option>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center py-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Short description</span>
                        </label>
                        <label className="input-group ">
                            <input defaultValue={description} type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">price</span>
                        </label>
                        <label className="input-group w-full">
                            <input defaultValue={price} type="number" name="price" placeholder="price " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center py-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={rating} type="number" name="rating" placeholder="Rating max 5 " className="input input-bordered" />
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
                <input className="btn btn-block mb-10 bg-green-700  text-white hover:bg-green-500" type="submit" value="Update Product" />

            </form>
        </div>
    );
};

export default UpdateProduct;
UpdateProduct.propTypes = {
    loadProduct: PropTypes.node
}