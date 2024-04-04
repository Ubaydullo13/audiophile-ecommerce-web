import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
import logo from '../../assets/home/logo.svg'
import cart from '../../assets/home/cart.svg'
import Modal from '../Modal'
import { useState } from 'react'

function Header() {
    const [modal, setModal] = useState(false);
  return (
    <header className={styles.header}>
        <div className={styles.headerWrapper}>
            <div className={styles.headerLogo}>
                <NavLink to="/" className={styles.headerLogoLink}>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <nav className={styles.headerNav}>
                <NavLink to="/" className={styles.headerNavLink}>
                    Home
                </NavLink>
                <NavLink to="/headphones" className={styles.headerNavLink}>
                    Headphones
                </NavLink>
                <NavLink to="/speakers" className={styles.headerNavLink}>
                    Speakers
                </NavLink>
                <NavLink to="/earphones" className={styles.headerNavLink}>
                    Earphones
                </NavLink>
            </nav>
            <div onClick={() => setModal(!modal)} className={styles.headerCart}>
                    <img src={cart} alt="cart" />
            </div>
            {modal && <Modal setModal={setModal}/>}
        </div>
    </header>
  )
}

export default Header