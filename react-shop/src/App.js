import logo from './logo.svg';
import './App.css';
import ProductsGrid from './comp/ProductsGrid/ProductsGrid'
import Cart from './comp/Cart/Cart'
import Select from './comp/Select/Select'
import ModalOrder from './comp/ModalOrder/ModalOrder'
import { useEffect, useState, useRef } from 'react';

function App() {
  const [showCart, setShowCart] = useState(false)
  const [showOrder, setShowOrder] = useState(false)
  const [cartList, setCartList] = useState([])
  const [products, setProducts] = useState([])
  const [price, setPrice] = useState(0)

  useEffect(() => {
    let total = cartList.reduce((a, c) => {
      a = Math.round(a + c.price)
      return a
    }, 0)
    setPrice(total)
  }, [cartList])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(p => { setProducts([...p]) })
  }, [])

  const AppToCart = (data) => {
    data = products[data.getAttribute('data-id') - 1]
    setCartList(prev => [...prev, data])
  }

  const deleteCartEl = (index) => {
    setCartList((prev) => {
      prev.splice(index, 1)
      return [...prev]
    })
  }

  const handleOrder = (appear) => {
    setShowOrder(appear)
  }

  const getCartAndPrice = () => {
    let cart = []
    for (let c of cartList) {
      cart.push(c.title)
    }
    return [price, cart]
  }

  return (
    <div className="App">
      <p className='greeting'>Welcome to baeqspace's shop!</p>
      <Select />
      {showCart ? <Cart mode={showOrder} price={price} order={handleOrder} list={cartList} appear="Cart-Active" deleteEl={deleteCartEl} /> : <Cart list={cartList} />}
      <button className='cart-button' onClick={() => setShowCart(p => !p)}>Toggle Cart</button>
      <ProductsGrid list={AppToCart} products={products} />
      <ModalOrder appear={showOrder} orderAppear={handleOrder} getData={getCartAndPrice}/>
    </div>
  );
}

export default App;
