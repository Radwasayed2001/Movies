import React, { useEffect, useState } from 'react'
import './Movies.css'
import Card from './MovieCard/Card';
import axios from 'axios';
function Movies() {
    var [products,setProducts] = useState([]);
    useEffect(()=>{
        getData();
    },[])
    async function getData() {
        var res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c');
        var data = res.data.results;
        setProducts(data);
        // console.log(products);
    }
    console.log(products);
  return (
    
    <div id='movies'>
    
    <div className='first-section d-flex align-items-center justify-content-center'>
      <div className='container '>
        <h3>NOW PLAYING</h3>
        <h1 className='text-white' ><span className='fw-bold'>NOW</span> PLAYING</h1>
        
        <div className='btn btn-danger mt-5 p-4'style={{fontSize:'2rem' ,backgroundColor:"#f9002b,",color:'white'}}>Watch Now</div>
      </div>
    </div>
    <div className='second-section bg-black m-0'>
      <div className='container'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((item,index)=>{
            return <Card key={index} title={item.original_title} p={item.overview} path={item.poster_path}></Card>
        })}
</div>
      </div>
    </div>
    </div>
  )
}

export default Movies
