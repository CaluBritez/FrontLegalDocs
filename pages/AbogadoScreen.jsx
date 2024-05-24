import './AbogadoScreen.css'
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import imgArchivos from '../src/assets/archi.jpg';
import imgDoqui from '../src/assets/doqui.jpg'
import imgEscribir from '../src/assets/redactar.jpg'

function AbogadoScreen(){
    return(
        <>
        <div id='caja-abo-screen'>
            <Header />
            <div id='cuerpo-abo-screen'>
                <div id='caja-izq'>
                    <img src={imgArchivos} alt="" className='img-screen-abo'/>
                    <h2 className='text-screen-abo'>Archivos</h2>
                </div>
                <div id='caja-cen'>
                    <img src={imgDoqui} alt="" className='img-screen-abo'/>
                    <h2 className='text-screen-abo'>Consultas con Doqui</h2>
                    <img src={imgEscribir} alt="" className='img-screen-abo'/>
                    <h2 className='text-screen-abo'>Redactar</h2>
                </div>
                <div id='caja-der'></div>
            </div>
            <Footer />
        </div>
        </>

    )
}

export default AbogadoScreen