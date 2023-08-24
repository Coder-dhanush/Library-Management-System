
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import Navbar from './Components/navbar/Navbar';
import ContactUs from './Pages/contactus/ContactUs';
import BookInfo from './Pages/bookInfo/BookInfo';
import Collection from './Pages/collection/Collection';
import Footer from './Components/footer/Footer';
import Gallary from './Components/gallary/Gallary';
import Middle from './Components/Middle/Middle';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <main>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contactus' element={<ContactUs/>}/>
  <Route path='/middleComponent' element={<Middle/>}/>

  <Route  path='/category/:categoryId?' element={<Collection/>}/>
  <Route path='/bookinfo/:bookid' element={<BookInfo/>}/>
  <Route path='/gallary/:imgid' element={<Gallary/>}/>
</Routes>
     </main>
     <Footer/>
    </div>
  );
}

export default App;
