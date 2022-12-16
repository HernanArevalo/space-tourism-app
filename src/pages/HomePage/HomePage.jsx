
import { Link } from 'react-router-dom'
import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="home-container animate__animated animate__fadeIn animate__slow">

      <div className="home-left-content">
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>
        <p>  Let's face it; if you want to go to space, you might as well genuinely go to 
             outer space and not hover kind of on the edge of it. Well sit back, and relax 
             because we'll give you a truly out of this world experience!
        </p>
      </div>
      <div>
      <Link to={`/destination/moon`}> 
      <div className='explore-container'>
        <div>
          <span>EXPLORE</span>
        </div>
      </div>
      </Link>

      </div>
    </div>
  )
}
