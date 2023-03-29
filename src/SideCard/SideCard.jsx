import React from 'react';
import './SideCard.css'
const SideCard = ({card}) => {
    
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
                </div>
        </div>
    );
};

export default SideCard;