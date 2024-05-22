import './Home.css'
import imgprincipal from '../src/assets/justice.png';
import justice from '../src/assets/abo.jpg';
import empresa from '../src/assets/empresa.jpg';
import judi from '../src/assets/judiciales.jpg';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';

function Home() {
    return (
      <>
        <Header />
        <div id='caja-home'>
            <div id='caja-center'>
                <div id='caja-imagen-cuerpo'>
                    <img src={imgprincipal} alt="" />
                </div>
                <div id='caja-text-legaldocs'>
                    <h1>LegalDocs</h1>
                    <p>LegalDocs es el sistema de gestión jurídica más difundido de la República Argentina, con una trayectoria de más de 34 años sirviendo en estudios jurídicos, asesorías letradas de bancos, empresas públicas y privadas, municipalidades, fiscalías de estado y numerosos organismos estatales. Se adapta a toda clase de organización; estudios unipersonales, medianos y grandes lo han usado ya por muchísimos años en forma ininterrumpida y sabiendo que nuestro equipo trabaja constantemente para hacerlo evolucionar.</p>
                </div>
            </div>
        </div>
        <div id='caja-clientes'>
            <div id='caja-center-clientes'>
                <div className='contenido-card'>
                    <img src={justice} alt="" className='img-card'/>
                    <h2>Abogados</h2>
                    <ul>
                        <li>Para gestionar todo tipo de estudio jurídico</li>
                        <li>Es una aplicación de escritorio, con gran velocidad operativa</li>
                        <li>Gestión de expedientes (procesos judiciales y extrajudiciales)</li>
                        <li>Modelización y automatización de textos</li>
                        <li>Modelización y automatización de listados y reportes</li>
                        <li>Administración de todo tipo de documentos dentro de cada expediente</li>
                        <li>Administración de colecciones de imágenes</li>
                        <li>Creación de PDFs con economía de tamaño para facilitar el intercambio y uso de firma digital</li>
                        <li>Presentaciones judiciales</li>
                        <li>Liquidaciones con actualización monetaria y conversión de monedas</li>
                        <li>Liquidaciones masiva de cuentas corrientes</li>
                        <li>Agendas y mensajería interna vinculada a la información</li>
                        <li>Gestión de la prueba con agendamientos automáticos</li>
                        <li>Operaciones masivas de grandes carteras de expedientes</li>
                        <li>Acceso local, remoto y móvil</li>
                        <li>Opción nube instalando la base de datos en nuestro datacenter</li>
                    </ul>
                </div>
                <div className='contenido-card'>
                    <img src={empresa} alt="" className='img-card'/>
                    <h2>Empresas</h2>
                    <p id='text-empr'>LegalDocs se adapta tanto a corporaciones que tramitan sus causas internamente, como aquellas que lo hacen a través de estudios tercerizados, corresponsalías o sucursales. Gestiona los expedientes en forma distribuída y posibilita el control centralizado. Los distintos modos de implementación brindan una solución distinta para las necesidades de cada empresa.</p>
                    <ul>
                        <li>Gestión de causas internas</li>
                        <li>Gestión y control de causas tercerizadas</li>
                        <li>Seguridad y supervisión de la información</li>
                        <li>Control y auditoría sobre los datos</li>
                        <li>Flujo de información segura</li>
                    </ul>
                </div>
                <div className='contenido-card'>
                    <img src={judi} alt="" className='img-card'/>
                    <h2>Judiciales</h2>
                    <p id='text-empr'>LegalDocs para oficinas judiciales permite, desde la simple instalación en un juzgado o tribunal individual, hasta la informatización integral de un Poder Judicial, abarcando la gestión de causas, la publicación de expedientes para consulta web en línea y en tiempo real, las presentaciones electrónicas, el pase total o parcial de causas entre organismos, la notificación electrónica con firma digital y mucho más!</p>
                    <ul>
                        <li>Gestión judicial integral</li>
                        <li>Manejo de receptorías y sorteos</li>
                        <li>Pase de expedientes entre instancias</li>
                        <li>Notificaciones con firma digital</li>
                        <li>Consulta en línea de expedientes</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />     
      </>
    )
  }
  
  export default Home