import React from 'react'
import '../components/style/header.css'
import Searchicon from '@material-ui/icons/SearchOutlined'
import Carticon from '@material-ui/icons/ShoppingCartOutlined'
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider'
import {auth} from './firebase'


function Header() {
  const [{basket,user},dispatch] =useStateValue()
  const handleAuthentication = () =>{
    auth.signOut()
  }
  return (
    <div className='header'>
      <Link to='/'><div className='header__logo'><img src="../img/header__logo.png"/></div></Link>
      <div className='header__center'>
        <input type="text" placeholder='search amazon.in' />
        <Searchicon className='header__searchicon'/>
      </div>
      <div className='header__right'>

         <Link to={!user && '/login'} style={{ textDecoration: 'none',color:'white' }}>
          <div className='header__option' onClick={handleAuthentication}>
            <h5>Hello,</h5>
            <h3>{user?'Sign Out':"Sign In"}</h3>
          </div>
         </Link>
          
         <div className='header__option'>
            <h5>Return</h5>
            <h3>& Orders</h3>
         </div> 

         <Link to='/checkout' style={{ textDecoration: 'none' }}>
         <div className='header__basket'>
            <div className='header__option'>
               <div> 
                 <Carticon />
                  <h5>Cart</h5> 
                </div>
                <h3 className='header__basketCount'>{basket?.length}</h3>
            </div>
          </div>
         </Link>
          
      </div>
 
    </div>
  )
}

export default Header
