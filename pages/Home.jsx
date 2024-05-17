import './Home.css'
import logo from '../src/assets/LogoLegalDocs.png'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";

function Home() {

    return (
      <>
        <div id='header'>
            <div id='nav-box'>
                <img src={logo} id="logo" alt="" />
                <div id='center-box'>
                    <h3>Tu Estudio Juridico online</h3>
                </div>
                <div id='botonera-box'>
                    <div id='botonera'>
                        <button >Ingresar</button>
                        <button >Nosotros</button>
                        <button >Contacto</button>
                    </div>
                </div>
            </div>
            
        </div>
        <div id='caja-home'></div>

        <div id='caja-footer'>
            <div id='caja-redes'>
                <div className='social-icon'><FaXTwitter /></div>
                <div className='social-icon'><IoLogoInstagram /></div>
                <div className='social-icon'><FaFacebookSquare /></div>
                <div className='social-icon'><CgMail /></div>
                <div className='social-icon'><FaWhatsapp /></div>
            </div>
            <div id='caja-texto-footer'>
                <p>© LegalDocs - Todos los derechos reservados.</p>
            </div>
        </div>      

      </>
    )
  }
  
  export default Home