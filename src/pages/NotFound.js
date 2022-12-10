import Avatar from '../assets/img/layout/Avatar.png'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container">

      <div className="container-wrapper">

        <div className="content centered not-found">
          <div  ><img src={Avatar} /></div>
          <p  >Oh no, page not found.</p>
          <Link to='/'>
            <button className="btn">Home</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default NotFound