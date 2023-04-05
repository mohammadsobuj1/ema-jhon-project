
import { getShoppingCart } from "../../utilities/fakedb";


// const loaderData =()=>{
//     const data = fetch('products.json')
//     .then(res =>res.json())
//     .then(data => {

//     })



    
// }

// export default loaderData



const loaderData = async()=>{
    const loaddata =await fetch('products.json')
    const products =await loaddata.json();
    const storeCard = getShoppingCart()

    const saveCard = []
    for (const id in storeCard){
        const addedProduct = products.find(pd => pd.id === id)
        
        if(addedProduct){
            const quntity = storeCard[id]
            addedProduct.quntity = quntity
            saveCard.push(addedProduct)
        }
        else{

        }
    }
  return saveCard
}

export default loaderData
