import {MdOutlineLocalLibrary} from 'react-icons/md'
import {BiHelpCircle} from 'react-icons/bi'
import {  useNavigate } from 'react-router-dom';
import {FcSearch} from 'react-icons/fc'
import './Navbar.scss'

function Navbar() {
  const navigate = useNavigate();

  // function handleGallaryClick(){
  //   navigate('/middleComponent');
  // }
  function handleUpperClick(){
    navigate('/contactus');
  }
  function handleUpperLeftClick(){
    navigate('/');
  }
  return (
    <div className='Navbar'>
    <div className="navbar-container">
    <div className="upper">
     <div className="upperLeft" onClick={navigate('/middleComponent')}>
     <div className="header-icon"><MdOutlineLocalLibrary/></div>
     <h2 className='heading'>Public Library</h2>
     </div>
    
     <div className="upperRight">
   
    <input className='search-bar' type="text" placeholder='Search here'/>
    <div className="icon"><FcSearch/></div>
    </div>
    </div>
     <div className="down">
    <div className="downLeft">
      <ul className='list'>
        <li className="list-item" onClick={handleUpperLeftClick}>HOME</li>
        <li className="list-item">ABOUT US</li>
        <li className="list-item" onClick={()=> navigate('/middleComponent')}>GALLARY</li>
      </ul>
    </div>
   
    <div className="downRight" onClick={handleUpperClick}>
     <div className="contact-icon"><BiHelpCircle/></div>
     <h2 className='link'>Contact Us</h2>
     </div>
    </div>
   
    </div>
    </div>
    
  )
}

export default Navbar