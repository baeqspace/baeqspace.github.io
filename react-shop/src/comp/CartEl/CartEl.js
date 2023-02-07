import './CartEl.css'

function CartEl ({index,id, img, header, price, ...props}) {
    return (
        <div className='CartEl' {...props} data-id={id} data-index={index} >
            <img className="el-img" src={img}></img>
            <p className="el-header">{header}</p>
            <p className="el-price">{price}</p>
        </div>
    )
}

export default CartEl