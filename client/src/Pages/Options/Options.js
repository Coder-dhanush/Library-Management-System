import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
 import {setCategoriesData} from '../../redux/slices/categorySlice';


function Options() {
  useEffect(()=>{
    dispatch(setCategoriesData("4"));
    console.log("Hello");
  },[])
  const dispatch = useDispatch()
  return (
    <div>
   
    
    </div>
  )
}

export default Options