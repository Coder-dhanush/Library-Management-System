import React from 'react'
import { useEffect, useState } from 'react'
import './Middle.scss'

import Gallary from '../gallary/Gallary';
import { axiosClient } from '../../utils/axiosClient';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Middle() {
    const [gallary,setGallary]=useState();
    // const count = useSelector(state => state.categoryReducer.count);
    // console.log("count is",count);
    const params=useParams();
    async function fetchData(){
        const gallaryResponse = await axiosClient.get(`/gallaries?populate=*`);
        setGallary(gallaryResponse.data.data);
      }
      useEffect(()=>{
         fetchData();
         console.log("gallary" ,gallary)
      },[])

      if(gallary){
  return (
     <div className='GallaryTop'>   
    <>  {gallary?.map((item) => <Gallary key={item.id} book={item}/>)}
    </>
 </div>
  )
}
else{
    return(
        <div><h1>Waiting</h1></div>
    )
}
}
export default Middle