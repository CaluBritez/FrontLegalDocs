import './Login.css'
import logo from '../src/assets/LogoLegalDocs.png'
import { Link } from 'react-router-dom';
import Footer from '../src/components/Footer.jsx';

function Login() {

  return (
    <>
      <div id='contenedor-todo'>
        <div id='caja-login'>
          <div id='caja-logo'>
          <Link to="/"><img src={logo} className="hover-image" id="logo" alt="" /></Link>
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
        <Footer />
      </div>
    </>
  )
}

export default Login