import { useParams } from 'react-router-dom'
import { crew } from '../../data.json'
import './CrewPage.css'


export const CrewPage = () => {

  const { member:memberParam } = useParams()

  const member = crew.filter( memb => memb.name.toLowerCase().includes(memberParam) )[0]



  return (
    <div className="crew-container animate__animated animate__fadeIn animate__slow">
      <div className="page-title">
          <span className="">02</span>
          MEET YOUR CREW
      </div>
      <div className="crew-content">

          <div className='crew-left-content'>
            <h3 className="memember-charge">
              { member.role.toUpperCase() }
            </h3>
            <h2 className="member-name">
              { member.name.toUpperCase() }
            </h2>
            <p className="memember-description">
              { member.bio }
            </p>
            <div className="members-circles">
              { crew.map(memb => (
                  <div className={`member-circle${memb.name.toLowerCase().includes(memberParam)? ' active':''}`}></div>
              ))}

            </div>
          </div>

          <div className='crew-right-content'>
            <div className="memember-picture">
            </div>
          </div>


      </div>
    </div>

  )
}
