import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
    // console.log(products)
    // const {title, price, image, id} = products
  return (
    <div>
      {
        products.map((item)=> <ProductCard {...item} /> )
        // (products) => <ProductCard {...products} />
      }
    </div>
  )
}

export default ProductList
