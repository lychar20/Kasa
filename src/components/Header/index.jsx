import { Link, Outlet } from 'react-router-dom' 
import LOGO from './LOGO.png'
//import LOGO from '../assets/LOGO.png'
import './header.scss'

function Header() {
  return (
    <> 
    <div className='test'>
      <img src={LOGO} alt='logo-la-kasa' className='logo' />
    
    <nav>
    <Link to="/" className='Oui'>Accueil</Link>
    <Link to="/about" className='Oui'>About</Link>
    
  </nav>
  </div>
  <Outlet /> 
  </>
  )
}

export default Header