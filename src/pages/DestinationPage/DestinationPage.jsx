
import { Link } from 'react-router-dom'
import './DestinationPage.css'


export const DestinationPage = () => {
  return (
    <div className="destination-container">

      <div className='left-content'>
        <div className="left-text">
            <span className="">01</span>
            PICK YOUR DESTINATION
        </div>
        <img src="src/assets/destination/image-moon.png" className='planet-image' />
      </div>

      <div className='right-content'>
      <ul className='destination-list'>
                <li className='destination-item'>
                    <Link to="/destination/moon">
                      <div className="destination-item-text">
                          MOON
                      </div>
                    </Link>
                    <div className='destination-hover-rectangle'></div>
                </li>
                <li className='destination-item'>
                    <Link to="/destination/mars">
                      <div className="destination-item-text">
                          MARS
                      </div>
                    </Link>
                    <div className='destination-hover-rectangle'></div>
                </li>
                <li className='destination-item'>
                    <Link to="/destination/europa">
                      <div className="destination-item-text">
                          EUROPA
                      </div>
                    </Link>
                    <div className='destination-hover-rectangle'></div>
                </li>
                <li className='destination-item'>
                    <Link to="/destination/titan">
                    <div className="destination-item-text">
                        TITAN
                    </div>

                    </Link>
                    <div className='destination-hover-rectangle'></div>
                </li>
            </ul>

      </div>
    </div>
  )
}
