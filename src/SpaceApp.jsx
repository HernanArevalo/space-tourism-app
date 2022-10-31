import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { CrewPage, DestinationPage, HomePage, TechnologyPage } from './pages'
import './SpaceApp.css'

function SpaceApp() {

  return (
    <div className="space-app">
      <Navbar />

      <Routes>
        <Route path="/home" element={ <HomePage />}/>
        <Route path="/destination" element={ <DestinationPage />}/>
        <Route path="/crew" element={ <CrewPage />}/>
        <Route path="/technology" element={ <TechnologyPage />}/>

        <Route path="/*" element={ <HomePage />}/>
      </Routes>

    </div>
  )
}

export default SpaceApp