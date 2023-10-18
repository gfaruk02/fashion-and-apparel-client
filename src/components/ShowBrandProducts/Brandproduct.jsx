import PropTypes from 'prop-types';

const Brandproduct = ({brandItem}) => {
    const {name,brand,type,price,description,rating,photo} = brandItem
    console.log(brandItem);
    return (
        <div>
            <div className="card w-48 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
            </div> 
        </div>
    );
};

export default Brandproduct;
Brandproduct.propTypes = {
    brandItem: PropTypes.node
}