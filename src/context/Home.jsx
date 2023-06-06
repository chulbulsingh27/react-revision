import React, {useContext, useState } from 'react'
import faker  from "faker";
import { SingleProduct } from './SingleProduct';
import { CartValue } from './Context';
//import { CartValue } from './Context';


faker.seed(100);
export const Home = () => {
    
    const productArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name : faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image()
    }))
    
    const [products] = useState(productArray);
  return (
    <div>{products.map(( prod => (
        <SingleProduct prod = {prod} key={prod.id}/>
    )))}</div>
  )
}
