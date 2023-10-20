// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const MyCarts = () => {
    // const {user} = useContext(AuthContext);
    const [myCart, setMyCart] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/myCard?email=shadiasultana02@gmail.com')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setMyCart(data);
        })
    },[])
    // console.log(myCart);
    const handleDelete = (_id) =>{
        console.log(_id);

        //sweel alert
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/card/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = myCart.filter(cart=>cart._id !== _id);
                            setMyCart(remaining);
                        }
                    })
            }
        })
}
    return (
        <div className="my-20">
            <div className="overflow-x-auto ">
  <table className="table w-full md:w-9/12 mx-auto p-0 m-0">
    {/* head */}
    <thead>
      <tr className="text-xs md:text-xl font-semibold text-green-700 ">
        <th>SL.</th>
        <th>Image</th>
        <th>Name</th>
        <th>Brand</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        myCart?.map((cart, index)=> <tr key={index} className="hover:bg-green-300 text-xs md:text-xl" >
            
        <td>{index+1} </td>
        <td>
            <img className="w-14 h-10 md:w-20 md:h-16 rounded-lg" src={cart.photo}  />
        </td>
        
        <td>{cart.name}</td>
        <td>{cart.brand}</td>
        <td>${cart.price}.00</td>
        <td>
            <button onClick={()=>handleDelete(cart._id)} className="hover:bg-red-400 hover:text-white  p-5 rounded-lg text-red-500 font-bold"> 
                X
            </button>
        </td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCarts;