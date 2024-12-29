import React from 'react'
import ProductCard from './ProductCard'
import './Products.scss'

const ProductList = ({products}) => {
    // console.log(products)
    // const {title, price, image, id} = products
  return (
    <div className="products-list">
      {
        products.map((item)=> <ProductCard key={item.id} {...item} /> )
        // (products) => <ProductCard {...products} />
      }
    </div>
  )
}

export default ProductList
