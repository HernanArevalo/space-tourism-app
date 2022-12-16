import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { technology } from '../../data.json'
import './TechnologyPage.css'

export const TechnologyPage = () => {

  const { tech:techParam } = useParams()

  const tech = technology.filter( tech => tech.name.toLowerCase().includes( techParam ) )[0]

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions) 

  }, []);


  return (
    <div className="tech-container animate__animated animate__fadeIn animate__slow">
      <div className="page-title">
          <span className="">03</span>
          SPACE LAUNCH 101
      </div>
      <div className="tech-content">

          <div className='tech-left-content'>

            <div className="tech-circles">

              { technology.map((tech,index) => (

                <Link to={`/technology/${tech.name.toLowerCase()}`} key={ tech.name }> 
                  <div className={`tech-circle${tech.name.toLowerCase().includes(techParam)? ' active':''}`}>
                      {index+1}
                  </div>
                </Link> 
              ))
              }

            </div>
            
            <div className="tech-text">
              <h3>
                THE TERMINOLOGY...
              </h3>
              <h2>
                { tech.name.toUpperCase() }
              </h2>
              <p>
                { tech.description }
              </p>
            </div>
          </div>

          <div className='tech-right-content'>
            <div className="tech-picture">
              <img src={width >= 870? `/assets/technology/${ tech.images.portrait }`:`/assets/technology/${ tech.images.landscape }`} className='planet-image animate__animated animate__fadeIn animate__delay-1s' />
              
            </div>
          </div>


      </div>
    </div>
  )
}
