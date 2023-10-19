import Swal from 'sweetalert2'


const Addproduct = () => {

    const handleAddProduct = event =>{
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
        const product = {name,brand,type,price,category,description,rating,photo}
        // console.log(name,brand,type,price,description,rating,photo);
        console.log(product);

        fetch('http://localhost:5000/product',{
            method: "POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
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
        <div className="mx-auto w-3/4 pt-10 rounded-lg bg-blue-300">
            <h1> Add New Product</h1>
            <form onSubmit={handleAddProduct} className="w-1/2 mx-auto">

            <div className="flex gap-10 justify-center py-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder=" Name" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Brand Name</span>
                    </label>
<select className="select select-bordered" id="brand" name="brand">
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
            
            <div className="flex gap-10 justify-center py-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Product Type</span>
                    </label>
                    {/* <label className="input-group">
                        <input type="text" name="type" placeholder="man, woman, kids" className="input input-bordered" />
                    </label> */}
                    <select className="select select-bordered" id="type" name="type">
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
                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Category</span>
                    </label>
                    <select className="select select-bordered" id="category" name="category">
                    <option disabled selected>Select Category</option>
                    <option value="women">women's fashion</option>
                    <option value="men">Men's fashion</option>
                    <option value="kids">Kid's fashion</option>
                    <option value="accessories">Accessories</option>

                    </select>
                </div>
            </div>
            <div className="flex gap-10 justify-center py-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Short description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Short description" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">price</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="price" placeholder="price " className="input input-bordered" />
                    </label>
                </div>
            </div>
            <div className=" flex gap-10 justify-center py-5"> 
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="rating" placeholder="Rating max 5 " className="input input-bordered" />
                    </label>
                </div>
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input className="btn btn-block mb-10 bg-rose-500 text-white hover:bg-rose-400" type="submit" value="Add Product" />

            </form>
        </div>
    );
};

export default Addproduct;