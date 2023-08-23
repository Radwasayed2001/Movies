import React from 'react'
import FavCard from '../FavCard/FavCard'
import './FavPage.css'
import { useSelector } from 'react-redux'
function FavPage() {
  var cart = useSelector((state)=>state.productSlice.Fav)
  return (
    <div style={{paddingTop:"5rem",display:"flex",flexFlow:"column-reverse"}}>
      {
        cart.map((item,index)=>{
          return <FavCard item={item} index={index}  />
        })
      }
      
    </div>
  )
}

export default FavPage
