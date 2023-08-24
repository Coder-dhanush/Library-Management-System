import React from 'react'
import './Book.scss'
import { useNavigate } from 'react-router-dom'
function Book({book}){
    const navigate = useNavigate();
  return (
    <div className='Book' onClick={()=> navigate(`/bookinfo/${book.attributes.key}`)}>
    <div className="book-container">
        <div className="img-container">
            <div className="img">
                <img src={book.attributes?.image?.data.attributes.url} alt="" />
            </div>
        </div>
        <div className="info">
            <p className="title">{book.attributes.title}</p>
            <button className="read-more" onClick={()=> navigate(`/bookinfo/${book.attributes.key}`)}>Read-Content</button>
        </div>
    </div>

    </div>
  )
}

export default Book