import React from 'react'
import './header.style.scss'

import Navbar from '../navbar/navbar.component'

const Header = ()=>(
    <header>
        <h2 className='logo'>Flying Falcon</h2>
        <Navbar />
    </header>
)

export default Header