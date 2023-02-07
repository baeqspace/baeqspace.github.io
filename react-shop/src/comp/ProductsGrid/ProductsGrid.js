import {useState, useEffect} from 'react'
import Product from '../Product/Product'
import './ProductsGrid.css'

function ProductsGrid ({products, list}) {
    return (
        <div className='ProductsGrid'>
            {products.map((p)=>{
                return <Product onClick={(e) => {
                    let card = e.target.offsetParent
                    list(card)
                    card.style.backgroundColor = 'green'
                    setTimeout(()=>{
                        card.style.backgroundColor = ''
                    },500)
                }} key={p.id} product={p} data-id={p.id}/>
            })}
        </div>
    )
}

export default ProductsGrid