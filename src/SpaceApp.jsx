
import { Navbar } from './components/Navbar'
import { SpaceRouter } from './router/SpaceRouter'
import './SpaceApp.css'

function SpaceApp() {



  return (
    <div className="space-app">
      <Navbar />

      <SpaceRouter/>

    </div>
  )
}

export default SpaceApp