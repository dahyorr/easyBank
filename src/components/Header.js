import {useState} from 'react'
import logo from '../static/logo.svg'
import hamburger from '../static/icon-hamburger.svg'
import close from '../static/icon-close.svg'

const Header = () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggleDropdown = () =>{
        setDropdownOpen(!dropdownOpen)
    }

    return(
        <div className='Header'>
            <div className="container flex">
            <a href='/'><img src={logo} alt="Logo" /></a>

                <div className={`overlay ${dropdownOpen?'show': 'hide'}`} onClick={() => setDropdownOpen(false)} >
                    <ul className="nav flex dropdown" onClick={e=>e.stopPropagation()}>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Contact</a></li>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Careers</a></li>
                    </ul>
                </div>

                <a href='/' className='btn btn-cyan desktop'>Request Invite</a>
                <div className='hamburger mobile' onClick={toggleDropdown}><img src={dropdownOpen?close:hamburger} alt="hamburger"/></div>
                {/* <div className={`dropdown  ${dropdownOpen?'show': 'hide'}`}> */}

                {/* </div> */}
            </div>
        </div>
    )
}
export default Header