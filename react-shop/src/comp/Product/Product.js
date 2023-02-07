import './Product.css'

function Product({product, ...props}) {
    return (
        <div {...props} className="Product" data-category={product.category}>
            <img className='prod-img' src={product.image}></img>
            <div className='header-price'>
                <p className="prod-header">{product.title}</p>
                <div className="prod-price">{product.price}</div>
            </div>
        </div>
    )
}

export default Product