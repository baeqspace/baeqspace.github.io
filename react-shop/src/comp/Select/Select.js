import {useEffect, useState} from 'react'

function Select() {
    const [categs, setCategs] = useState([])

    const handleSelectChange = (e) => {
        let chosenCateg = e.target.value
        let products = document.querySelectorAll('.Product')
        if (chosenCateg == 'All') {
          products.forEach(n => n.style.display = 'block')
          return
        }
        
        let chosenProducts = document.querySelectorAll(`[data-category="${chosenCateg}"]`)
        products.forEach((n) => n.style.display = 'none')
        chosenProducts.forEach((n) => n.style.display = 'block')
      }
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories').then(res => res.json()).then(r => setCategs(r))
    }, [])

    return (
        <select className='categs-select' onChange={handleSelectChange}>
            <option>All</option>
            {categs.map((c, i) => {
                return <option key={i}>{c}</option>
            })}
        </select>
    )
}

export default Select