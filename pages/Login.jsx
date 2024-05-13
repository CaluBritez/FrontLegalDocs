import './Login.css'
import logo from '../src/assets/LogoLegalDocs.png'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";

function Login() {

  return (
    <>
    
      <div id='caja-login'>
        <div id='caja-logo'>
          <img src={logo} id="logo" alt="" />
        </div>
        <div id='caja-form'>
          <form action="">
            <div className='cajita-form'>
              <label htmlFor="">Usuario</label>
              <input type="text" placeholder='Ingrese su Usuario'/>
            </div>
            <div className='cajita-form'>
              <label htmlFor="">Contraseña</label>
              <input type="text" placeholder='Ingrese su Contraseña' />
            </div>
          <button>Ingresar</button>
          </form>
        </div>
      </div>

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

export default Login