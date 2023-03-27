import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [card, setCard ]=useState([])
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])

    const addBtn =(product)=>{
       const newCard = [...card, product]
       setCard(newCard)
            }
    return (
        <div className='container'>
             <div className="pro-container">
            {
                products.map(product => <Product 
                    key ={product.id}
                product ={product}
                addBtn={addBtn}
                ></Product>)
            }
         
           </div>
            <div className="pro-card">
                <h1>hello card</h1>
                <p>items : {card.length}</p>
            </div>
        </div>
    );
};

export default Products;

