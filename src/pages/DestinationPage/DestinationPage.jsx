
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { destinations } from '../../data.json'
import './DestinationPage.css'
import { desactivateNavBar } from '../../store/navbar'





export const DestinationPage = () => {

  const dispatch = useDispatch()

  const { destination:destinationParam } = useParams()

  const destination = destinations.filter(dest => destinationParam.includes(dest.name.toLowerCase()))[0]


  return (
    <div className="destination-container animate__animated animate__fadeIn animate__slow" onClick={ ()=> dispatch( desactivateNavBar() ) }>
      <div className="page-title">
          <span className="">01</span>
          PICK YOUR DESTINATION
      </div>
      <div className="destination-content">
          <div className='left-content'>
            <img src={ `/assets/destination/${ destination.images.png }` } className='planet-image animate__animated animate__fadeIn animate__delay-1s' alt={ `${destination.name.toLowerCase()} image` }/>
          </div>

          <div className='right-content'>
            <ul className='destination-list'>

              { destinations.map(destination =>           
                    (
                      <li className='destination-item' key={ destination.name }>
                          <Link to={`/destination/${destination.name.toLowerCase()}`}>
                            <div className={`destination-item-text ${destinationParam.includes(destination.name.toLowerCase())? 'active':''}`}>
                                { destination.name.toUpperCase() }
                            </div>
                          </Link>
                          <div className={`destination-rectangle ${destinationParam.includes(destination.name.toLowerCase())? 'active':'inactive'}`}></div>
                      </li>
                    ))
              }
            </ul>

            <div className="destination-name">
              { destination.name.toUpperCase() }
            </div>
            <p className="destination-description">
              { destination.description }
            </p>
            <div className="destination-data">
              <div className='destination-data-distance'>
                <div className='destination-data-title'>AVG. DISTANCE</div>
                <div className='destination-data-number'>{ destination.distance.toUpperCase() }</div>
              </div>
              <div>
                <div className='destination-data-title'>EST. TRAVEL TIME</div>
                <div className='destination-data-number'>{ destination.travel.toUpperCase() }</div>
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}
