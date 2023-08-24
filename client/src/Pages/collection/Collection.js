import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { axiosClient } from '../../utils/axiosClient';
import Book from '../../Components/books/Book';
import './Collection.scss'
// import {categoryReducer} from '../../redux/Store'
// import {setCategoriesData} from '../../redux/slices/categorySlice';

function Collection() {
    const [categoryId,setCategoryId] = useState();
    const [categories,setCategories] = useState([])
    const [book,setBook]=useState([]);
    const params = useParams();
    const dispatch=useDispatch();
    // const categories = useSelector(state => state.categoryReducer.categories);
  
    const navigate = useNavigate();

    async function fetchData(){
      const url = params.categoryId? `/bookinfos?populate=image&filters[category][key][$eq]=${params.categoryId}`
      :`/bookinfos?populate=image`; 
      const response= await axiosClient.get(url);
        // const response= await axiosClient.get(`/bookinfos?populate=image`);
        const categoryResponse = await axiosClient.get('/categories');
       const category=[];
        category.push(categoryResponse.data.data);
        setCategories([...category[0]]);
        
         setBook(response.data.data);
    }
    useEffect(()=>{
      setCategoryId(params.categoryId);
      fetchData();
    },[params])

    function updateCategory(e){
        navigate(`/category/${e.target.value}`)
        }
    return (
        <div className='Categories'>
        <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Books Related to {params.categoryId}</h2>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
           {categories.length>0 &&  <div className="category-filter">
                <h3>Category</h3>
                {categories?.map((item)=> (
                      <div key={item.id} className="filter-radio">
                          <input name='category' type="radio" value={item.attributes.key} id={item.id} onChange={updateCategory} checked={item.attributes?.key===categoryId}/>
                          <label htmlFor={item.id}>{item.attributes.title}</label>
                      </div>
                ))}
      
    </div>}
          </div>
          <div className="book-box">
          {book?.map(book => <Book key={book.id} book={book}/>)}
          </div>
        </div>
        </div>
        
        </div>
      )
    
}

export default Collection