import React from 'react'
import NavbarStyle from '../app/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <ul className={NavbarStyle.ul}>
        <li className={NavbarStyle.li}><Link href="/">Home</Link></li>
        <li className={NavbarStyle.li}><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
