import logo from '../assets/LogoLegalDocs.png'
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
    return(
        <div id='header'>
            <div id='nav-box'>
                <Link to="/">
                    <img src={logo} id="logo" className="hover-image" alt="" />
                </Link>
                <div id='center-box'>
                    <h3>Tu Estudio Jurídico online</h3>
                </div>
                <div id='botonera'>
                    <Link to="/Login"><button>Ingresar</button></Link>
                    <button >Nosotros</button>
                    <button >Contacto</button>
                </div>
                
            </div>    
        </div>

    )
}

export default Header