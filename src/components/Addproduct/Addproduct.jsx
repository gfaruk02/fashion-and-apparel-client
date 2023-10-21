import Swal from 'sweetalert2'


const Addproduct = () => {

    const handleAddProduct = event => {
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
        const product = { name, brand, type, price, category, description, rating, photo };
        console.log(product);

        fetch('https://assignment-10-fashion-and-apparel-server-side-ibp4irthk.vercel.app/product', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
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
                    form.reset();
                }

            })

    }

    return (
        <div className="mx-auto w-full md:w-3/4 mt-8 pt-4 rounded-lg bg-green-200 font-bold">
            <h1 className='text-center text-3xl text-green-700 '> Add New Product</h1>
            <form onSubmit={handleAddProduct} className="w-3/4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-green-800 label-text text-xl font-semibold">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder=" Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className=" text-green-800 label-text text-xl font-semibold">Brand Name</span>
                        </label>
                        <select className="select select-bordered text-green-500 " id="brand" name="brand">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className=" text-green-800 label-text text-xl font-semibold">Product Type</span>
                        </label>
                        <select className="select select-bordered text-green-500" id="type" name="type">
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
                            <span className=" text-green-800 label-text text-xl font-semibold">Category</span>
                        </label>
                        <select className="select select-bordered text-green-500" id="category" name="category">
                            <option disabled selected>Select Category</option>
                            <option value="women">women's fashion</option>
                            <option value="men">Men's fashion</option>
                            <option value="kids">Kid's fashion</option>
                            <option value="accessories">Accessories</option>

                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className=" text-green-800 label-text text-xl font-semibold">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className=" text-green-800 label-text text-xl font-semibold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="price " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className=" text-green-800 label-text text-xl font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" placeholder="Rating max 5 " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className=" text-green-800 label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block my-10 bg-green-700 hover:bg-green-500 text-white" type="submit" value="Add Product" />

            </form>
        </div>
    );
};

export default Addproduct;