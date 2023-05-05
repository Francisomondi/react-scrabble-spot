import React from 'react'

const Product = () => {
    //const products=['Sofas','Coffee tables','Console tables']

    const products=[
    {id:1,name:'3 seater sofa', price:35000},
    {id:2,name:'6 seater Dinning set', price:65000},
    {id:3,name:'6ft Tv cabinet', price:35000},
    {id:4,name:'5 by 6 Chester Bed', price:45000},
    {id:5,name:'Planters', price:15000},
    {id:6,name:'Coffee tables', price:25000}
]
    const productsList= products.map((product)=>
    <div key={product.id}>
    <h2 >{product.name}</h2>
    <span>Ksh {product.price}</span>
    </div>
    
 )
  return (
    <div >
   

     {productsList}
      
    </div>
  )
}

export default Product
