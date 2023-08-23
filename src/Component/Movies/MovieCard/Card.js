import React from 'react';
import './Card.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Regux/slices/slice';
import { addToMyCart } from '../../../Regux/slices/slice2';
function Card(props) {
  var dispatch = useDispatch();
  function add(data){
    dispatch(addToCart(data));
  }
  function addCart(data){
    dispatch(addToMyCart(data));
  }
  return (
    <div>
      <div className="col">
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500/${props.path}`} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.p}</p>
      </div>
      <div className="btn btn-success" onClick={()=>{addCart(props)}}>
        <small className="text-white fs-5 fw-bold"><i className="bi bi-cart-fill fs-4"></i> Add To Cart</small>
      </div>
      <div className="btn btn-dark mt-1" onClick={()=>{add(props)}}>
        <small className="text-warning fs-5 fw-bold"><i className="bi bi-star-fill"></i> Add To Fav</small>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Card
