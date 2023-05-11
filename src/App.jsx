import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/index.css';
import img1 from './assets/1 (1).jpg'
import img2 from './assets/1 (2).jpg'
import img3 from './assets/1 (3).jpg'
import {FaArrowUp} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'

export default function App(){
  return(
    <>
      <div className="fluid">
        <div className="flex">
          <a href=''>Hygiene et soins</a>
          <a href=''>Femme</a>
          <a href=''>Homme</a>
          <a href=''>Bébé et enfant</a>
          <a href=''>Epicerie</a>
          <a href=''>Maison et Cuisine</a>
          <a href=''>Loisir et animaux</a>
          <a href=''>Brico, Jardin et Auto moto</a>
          <a href=''>Idéé cadeau et DIY</a>
          <a href=''>Blog</a>
        </div>
      </div>

      <div className="container">
        <div className="row text-center mt-3">
            <h1>Notre Sélection</h1>
        </div>

        <div className="grid">
        <div className='card'>
              <i><FaHeart color='white'/></i>
              <img src={img1} alt="2" className='card-img-top' />
              <div className="card-body">
                <p>Maquillage , produit beauté</p>
                <div className="card-text text-center">
                  <h6>3.34£</h6>
                </div>
              </div>

            </div>
            <div className='card'>
            <i><FaHeart color='white'/></i>
            <img src={img2} alt="2" className='card-img-top' />
            <div className="card-body">
                <p>Maquillage , produit beauté</p>
                <div className="card-text text-center">
                  <h6>19.34£</h6>
                </div>
              </div>

            </div >
            <div className='card'>
            <i><FaHeart color='white'/></i>
            <img src={img3} alt="2" className='card-img-top' />
            <div className="card-body">
                <p>Maquillage , produit beauté</p>
                <div className="card-text text-center">
                  <h6>28.34£</h6>
                </div>
              </div>

            </div >
            <div className='card'>
              <i><FaHeart color='white'/></i>
            <img src={img1} alt="2" className='card-img-top' />
            <div className="card-body">
                <p>Maquillage , produit beauté</p>
                <div className="card-text text-center">
                  <h6>5.34£</h6>
                </div>
            </div>

            </div>
            
        </div>
        <button> <span><FaArrowUp color='white'/></span> </button>
      </div>
    </>
  )
}