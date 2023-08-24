import React from 'react'
import './Gallary.scss'
import { useNavigate } from 'react-router-dom'
function Gallary({book}){
    const navigate = useNavigate();
  return (
    <div className='Gallary'>
    <div className="gallary-container">
        <div className="img-container">
            <div className="img">
                <img src={book.attributes?.Image?.data.attributes.url} alt="" />
            </div>
        </div>
        <div className="info">
            <p className="title">{book.attributes.title}</p>
        </div>
    </div>

    </div>
  )
}

export default Gallary