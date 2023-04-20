import React, { useEffect, useState } from 'react';
import SideCard from '../../SideCard/SideCard';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
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

        useEffect(()=>{
            const shoppingCard = getShoppingCart();
            let saveCard = []
          for(const id in shoppingCard){
          const addProduct = products.find(product => product.id === id)
          if(addProduct){
            const quntity = shoppingCard[id]
            addProduct.quntity= quntity
            saveCard.push(addProduct)
          }
     
          }
          setCard(saveCard)
        },[products])

        const clearHandelar =()=>{
            setCard([])
           deleteShoppingCart()
        }



    const addBtn =(product)=>{
    
       
    //    const newCard = [...card, product]
        let newCard = []

        const exsit = card.find(pd => pd.id === product.id )

        if(!exsit){
            product.quntity = 1;
             newCard = [...card , product]
        }
        else{
            exsit.quntity = exsit.quntity + 1;
          
        
            const remaining = card.filter(pd => pd.id !== product.id)
            newCard = [...remaining , exsit]
        }

       setCard(newCard)
      addToDb(product.id)
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
               <SideCard
               clearHandelar={clearHandelar}
               card ={card}
               ></SideCard>
            </div>
        </div>
    );
};

export default Products;

