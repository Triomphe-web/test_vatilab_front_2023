import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import img1 from './assets/1 (1).jpg'
import img2 from './assets/1 (2).jpg'
import img3 from './assets/1 (3).jpg'

export default function App(){
  return(
    <>
        <div className="row">
            <img src={img1} alt="1" className='img-fluid col-lg-3'/>
            <img src={img2} alt="2" className='img-fluid col-lg-3' />
            <img src={img3} alt="3" className='img-fluid col-lg-3'/>
            <img src={img1} alt="4" className='img-fluid col-lg-3'/>
        </div>
    </>
  )
}