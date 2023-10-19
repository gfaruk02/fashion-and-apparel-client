import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brandproduct = ({brandItem}) => {
    const { _id, name, brand, type, price, description, rating, photo } = brandItem
    console.log(_id, brandItem);

    return (
        <div>
            {/* <div classNameName="card w-48 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
            </div>  */}


<div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={photo}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h1> {name} </h1>
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
  <div className="p-6 pt-0">
    <Link to={`/details/${_id}`}>
    <button
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Details
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