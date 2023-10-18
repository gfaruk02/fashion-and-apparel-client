import PropTypes from 'prop-types';

const Brand = ({brands}) => {
    const {_id, name, brand, image} = brands
    console.log(_id, brand);
    return (
        <div>
            {/* brande name and image */}
            <div className="card w-48 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
            </div> 
            {/* end band */}
        </div>
    );
};

export default Brand;
Brand.propTypes = {
    brands: PropTypes.node
}