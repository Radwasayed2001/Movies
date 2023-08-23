import React from 'react'
import './CardCart.css';
import { useDispatch } from 'react-redux';
import { removeFromMyCart } from '../../../Regux/slices/slice2';
function CardCart({item,index}) {
  var dispatch = useDispatch();
  function remove(index){
    dispatch(removeFromMyCart(index))
  }
  return (
    <div className='container'>
        <div className="card mb-3" style={{maxWidth: '1500px'}}>
        <div className="row g-0">
            <div className="col-md-3">
                <img src={`https://image.tmdb.org/t/p/w500/${item.path}`} className="img-fluid rounded-start h-100" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title fw-bold fs-3">{item.title}</h5>
                    <p className="card-text fs-4">{item.p}</p>
                    <a className='btn bg-danger text-white' onClick={()=>remove(index)}>Delete</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardCart
