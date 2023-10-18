import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({brands}) => {
    const {_id, name, brand, image} = brands
    console.log(_id, brand);

    // const handleBrand = ()=>{
        
    // }

    return (
        <div>
            <Link to={`/brandproduct/${brand}`}>
                {/* brand name and image */}
            <div className="card w-48 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
            </div> 
            {/* end brand */}
            </Link>
        </div>
    );
};

export default Brand;
Brand.propTypes = {
    brands: PropTypes.node
}