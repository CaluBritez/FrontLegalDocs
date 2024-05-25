import './AbogadoScreen.css'
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import imgArchivos from '../src/assets/archi.jpg';
import imgDoqui from '../src/assets/doqui.jpg';
import imgEscribir from '../src/assets/redactar.jpg';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function AbogadoScreen(){
    return(
        <>
        <div id='caja-abo-screen'>
            <Header />
            <div id='cuerpo-abo-screen'>
                <div id='caja-izq'>
                    <Link to="/"><img src={imgArchivos} alt="" className='img-screen-abo'/></Link>
                    <Link to="/"><h2 className='text-screen-abo'>Archivos</h2></Link>
                </div>
                <div id='caja-cen'>
                    <Link to="/"><img src={imgDoqui} alt="" className='img-screen-abo'/></Link>
                    <Link to="/"><h2 className='text-screen-abo'>Consultas con Doqui</h2></Link>
                    <Link to="/"><img src={imgEscribir} alt="" className='img-screen-abo'/></Link>
                    <Link to="/"><h2 className='text-screen-abo'>Redactar</h2></Link>
                </div>
                <div id='caja-der'>
                    <h3>Clientes</h3>
                    <div id='caja-casos'>
                        <div id='buscador-casos'>
                            <input type="text" />
                            <button><FaSearch /></button>
                        </div>
                        <div id='lista-casos'></div>
                        <button id='boton-agregar'>Añadir Cliente</button>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>

    )
}

export default AbogadoScreen