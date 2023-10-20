import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brandproduct = ({brandItem}) => {
    const { _id, name, brand, type, price, description, rating, photo } = brandItem
    console.log(_id, brandItem);

    return (
        <div>
<div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={photo}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6 ">
    <h1 className='text-green-700 font-bold text-xl'> {name} </h1>
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       Brand: {brand}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        Rating: {rating}
      </p>
    </div>
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       Type: {type}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        Price: ${price}
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      {/* {description} */}
      {
      description.length > 95 ? <span> {description.slice(0, 95)}</span>
      :  <span>{description}</span>
}
    </p>
  </div>
  <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
    <Link to={`/details/${_id}`}>
    <button
      className=" btn btn-primary  bg-green-700 hover:bg-green-500 text-white w-full"
      type="button"
    >
      Details
    </button>
    
    </Link>
    <Link to={`/updateproduct/${_id}`}>
    <button
      className=" btn btn-primary  bg-green-700 hover:bg-green-500 text-white w-full"
      type="button"
    >
      Update
    </button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Brandproduct;
Brandproduct.propTypes = {
    brandItem: PropTypes.node
}