import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'
const Product = (props) => {

const {img, name ,price, seller, ratings } = props.product
const addBtn = props.addBtn

    return (
   
       
        <>
          <div className="product">
          <img src={img} alt="" />
           <div className="card-product">
           <h3 className='pro-name'>Name : {name}</h3>
           <h3 className='pro-price'>   Price : ${price}</h3>
            <p>Manufacture : {seller}</p>
            <p className='pro-rating'>Rating : {ratings}</p>
           </div>
            <button onClick={()=>addBtn(props.product)}  className='card-btn'>
                Add to Card
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </>
    );
};

export default Product;

