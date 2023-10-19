import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyCarts = () => {
    const {user} = useContext(AuthContext);
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

  
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-9/12 mx-auto">
    {/* head */}
    <thead>
      <tr>
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
        myCart?.map((cart, index)=> <tr key={index} className="hover" >
            
        <td>{index+1} </td>
        <td>
            <img className="w-20 h-16 rounded-lg" src={cart.photo}  />
        </td>
        
        <td>{cart.name}</td>
        <td>{cart.brand}</td>
        <td>{cart.price}</td>
        <td>
            <button onClick={()=>handleDelete(cart._id)} className="hover:bg-orange-400 p-5 rounded-lg"> 
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