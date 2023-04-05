import React, { useState } from 'react';
import SideCard from '../../SideCard/SideCard';
import { useLoaderData } from 'react-router-dom';
import Reviewitem from '../Reviewitem/Reviewitem';
import './Oders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Oder = () => {
    const card = useLoaderData()
    const [cards ,setCart] = useState(card)

    const removeHandaler =(id)=>{
        const remaining = cards.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
        console.log(id)
    }
    
    return (
        <div className='container'>
           <div className="product-item">
            {
                cards.map(card => <Reviewitem
                key = {card.id}
                products = {card}
                removeHandaler = {removeHandaler}
                ></Reviewitem>)
            }
           </div>
           <div className="pro-card">
            <SideCard card ={cards} ></SideCard>

            
           </div>
        </div>
    );
};

export default Oder;