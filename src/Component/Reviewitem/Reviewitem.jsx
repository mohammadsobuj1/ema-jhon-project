import React from 'react';
import './Reviewitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Reviewitem = ({products, removeHandaler}) => {
 
    const {img, name, price,quntity, id } = products
    return (
        <div className='review-item'>
            <div className="review-img">
                <img src={img} alt="" />
            </div>
            <div className="review-detaile">
                <h5 className='review-title'> {name}</h5>
                <p>Price : $<span className='review-price'>  {price}</span></p>
                <p>Quntity : <span className='review-price'>{quntity}</span></p>
            </div>
          
                <button onClick={()=>removeHandaler(id)} className='review-btn'>
                <FontAwesomeIcon className='delete-btn' icon={faTrashAlt} />
              
                </button>
                
        </div>
    );
};

export default Reviewitem;