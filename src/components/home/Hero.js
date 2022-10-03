import mainImg from '../../assets/img/layout/HeroImg.png'
import groupAvatar from '../../assets/img/layout/GroupAvatar.png'
import circle from '../../assets/img/layout/Circle.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
          <div className="hero-inner">
              <div className="itm-left">
                <img src={groupAvatar} alt="" />
                <h2>Game Store</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <Link to='/about' className="btn">Learn More </Link>
                 
              </div>
              <div className="itm-right">
                  <img className='main-img' src={mainImg} alt=""   />
              </div>
          </div>
          <img src={circle} className="circle-sm circle" alt=""  />
          <img src={circle} className="circle-md circle" alt=""  />
          <img src={circle} className="circle-bg circle" alt=""  />
      </section>
  )
}

export default Hero