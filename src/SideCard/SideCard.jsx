import React from 'react';
import './SideCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const SideCard = ({card, clearHandelar}) => {
    
    const {} = card;
    let total = 0
    let ShippinCharge = 0
    let quntity = 0;
    for(const product of card){
// product.quntity = product.quntity || 1;
        total = total + product.price * product.quntity;
        ShippinCharge = ShippinCharge+product.shipping
        quntity = quntity+ product.quntity;
    }
const text = total*7/100;
const grandTotal = total+ ShippinCharge+text

    return (
        <div className='container-card'>
             <h1 className='card-title'>Oder Summary</h1>
                <div className="items-card">
                <p className='items-card'>items : {quntity}</p>
                <h4>Total price : {total}</h4>
                <p>Shipping Charge : {ShippinCharge}</p>
                <p>TEXT : {text}</p>
                <h3>Grand Total : {grandTotal}</h3>
                <button onClick={clearHandelar} className='clear-btn'>
                    Clear Card
                    <FontAwesomeIcon className='btn-icon' icon={faTrashAlt} />
                    </button>
                </div>
        </div>
    );
};

export default SideCard;