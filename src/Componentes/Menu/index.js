import { Link, useLocation } from 'react-router-dom'
import Styles from './Menu.css' 

export default function Menu() {

    const localizacao = useLocation();
    
    return (
        <header>
            {/* <nav className={Styles.navegacao}>
                <MenuLink to="/">Início</MenuLink>
                <MenuLink to="/sobremim">Sobre Mim</MenuLink>
            </nav> */}
        </header>
    )
}