import './AbogadoScreen.css'
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import imgArchivos from '../src/assets/archi.jpg';
import imgDoqui from '../src/assets/doqui.jpg';
import imgEscribir from '../src/assets/redactar.jpg';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import MyCalendar from '../src/components/Calendar.jsx';

function AbogadoScreen(){
    return(
        <>
        <div id='caja-abo-screen'>
            <Header />
            <div id='cuerpo-abo-screen'>
                <div id='caja-izq'>
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
                <div id='caja-cen'>
                    <Link to="/"><img src={imgDoqui} alt="" className='img-screen-abo'/></Link>
                    <Link to="/"><h2 className='text-screen-abo'>Consultas con Doqui</h2></Link>
                    <Link to="/"><img src={imgEscribir} alt="" className='img-screen-abo'/></Link>
                    <Link to="/"><h2 className='text-screen-abo'>Redactar</h2></Link>
                    <Link to="/"><img src={imgArchivos} alt="" className='img-screen-abo'/></Link>
                    <Link to="/"><h2 className='text-screen-abo'>Archivos</h2></Link>
                </div>
                <div id='caja-der'>
                    <MyCalendar />
                    <p>En la fecha de hoy no hay existen actividades pendientes</p>
                    <p>Proxima Actividad: 12/06/2024 Juicio presencial con Don Ramon</p>
                    <button id='boton-agregar-tarea'>Añadir Actividad</button>
                </div>
            </div>
            <Footer />
        </div>
        </>

    )
}

export default AbogadoScreen