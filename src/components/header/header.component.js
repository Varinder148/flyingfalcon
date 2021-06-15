import React from 'react'
import './header.style.scss'

import NavbarMenu from '../navbarMenu/navbarMenu.component'

const Header = ()=>(
    <header>
        <h2 className='logo'>Flying Falcon</h2>
        <NavbarMenu />
    </header>
)

export default Header