import React, { useEffect, useState } from 'react'
import dummyImg from '../../Images/Background2.jpg'
import './BookInfo.scss'
import { useParams } from 'react-router-dom'
import { axiosClient } from '../../utils/axiosClient';
function BookInfo() {
  const params = useParams();
  const [book,setBook]=useState(null);

async function fetchData(){
  const bookResponse = await axiosClient.get(`/bookinfos?filters[key][$eq]=${params.bookid}&populate=*`);
  // console.log(bookResponse);
  if(bookResponse?.data.data.length>0)
  {
    setBook(bookResponse.data.data[0]);
  }
}
  useEffect(()=>{
  setBook(null);
  fetchData();
  },[params])
  return (
    <div className='BookInfo'>
   <div className="container">
    <div className="layout">
        <div className="img-container center">
            <div className="img">
                <img src={book?.attributes?.image.data.attributes.url} alt="" />
            </div>
        </div>
        <div className="info">
            
                <h3 className="heading">{book?.attributes?.title}</h3>
            
            {/* <div className="content"></div> */}
            <p className="desc">{book?.attributes?.desc}</p>
        </div>
    </div>
  </div>
    </div>
  )
}

export default BookInfo