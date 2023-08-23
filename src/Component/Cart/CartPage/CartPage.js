import React from 'react'
import './CartPage.css'
import { useSelector } from 'react-redux'
import CardCart from '../cardCart/CardCart'
function CartPage() {
  var cart = useSelector((state2)=>state2.productSlice2.cart)
  return (
    <div style={{paddingTop:"5rem",display:"flex",flexFlow:"column-reverse"}}>
      {
        cart.map((item,index)=>{
          return <CardCart item={item} index={index}  />
        })
      }
      
    </div>
  )
}

export default CartPage
