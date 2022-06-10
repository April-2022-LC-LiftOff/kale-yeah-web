import CreateButton from './CreateButton'
import ProfileImage from './ProfileImage'
import SearchBar from './SearchBar'
import './Header.css';
import NavbarElements from '../NavigationBar/NavbarElements';
const Logo = require('../../images/logo.png')


const Header = () => {
    return (
      <header className="header-container">
        <div className="header-box">
        <img src={Logo} className='logo' alt='Kale Yeah!' />
        </div>
        
        <div className='header-box'>
          <SearchBar placeholder="Search"/>
        </div>

        <div className='header-box'>
        <CreateButton />
        </div>

        <div className='header-box'>
        <ProfileImage user="aunt_sheila" />
        </div>
        {/* <NavbarElements /> */}
        
      </header>
    )
  }
  
  export default Header