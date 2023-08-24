import React, { useEffect, useState } from 'react'
import Wallpaper from '../wallpaper/Wallpaper'
import './Home.scss'
import Category from '../../Components/category/Category'
import Book from '../../Components/books/Book';
import { useNavigate } from 'react-router-dom';
import { axiosClient } from '../../utils/axiosClient';
import { useDispatch } from 'react-redux';
// import setCategoriesData  from '../../redux/slices/categorySlice';

function Home() {
  const [categories,setCategories] = useState();
  const [topBooks,setTopBooks] =useState();
  const navigate=useNavigate();
  const dispatch = useDispatch();
  async function fetchData(){
    const categoryResponse = await axiosClient.get('/categories?populate=image');
    const topBooksResponse= await axiosClient.get('/bookinfos?filters[isTopPick][$eq]=true&populate=image');
    setCategories(categoryResponse.data.data);
    setTopBooks(topBooksResponse.data.data);
  }
  useEffect(()=> {
   fetchData();
  //  dispatch(setCategoriesData("7"))
  },[])
  return ( 
    <div className='Home'>
        <Wallpaper/>
        <section className="collection container">
            <div className="info">
                <h2 className="heading">Find By Categories</h2>
            </div>
            <div className="content">
               {categories?.map(category => <Category key={category.id} category={category}/>)}
            </div>
        </section>

        <section className="collection container">
            <div className="info">
                <h2 className="heading">Most Visited Books</h2>
            </div>
            <div className="content">
              {topBooks?.map(book => <Book key={book.id} book={book}/>)};
            </div>
        </section>
    </div>
  )
}

export default Home