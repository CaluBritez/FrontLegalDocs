import { Link } from 'react-router-dom';
import './Card.css'



function Card({img, title}) {
    return (
        <div className="card">
            <Link to="/"><img src={img} alt="" className='img-screen-abo'/></Link>
            <Link to="/"><h2 className='text-screen-abo'>{title}</h2></Link>
        </div>
    )   
}
export default Card