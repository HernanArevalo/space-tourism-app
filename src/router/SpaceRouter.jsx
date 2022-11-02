import { Navigate, Route, Routes } from 'react-router-dom'
import { CrewPage, DestinationPage, HomePage, TechnologyPage } from '../pages'

export const SpaceRouter = () => {
  return (
    <Routes>
        <Route path="/home" element={ <HomePage />}/>
        <Route path="/destination/:destination" element={ <DestinationPage />}/>
        <Route path="/crew" element={ <CrewPage />}/>
        <Route path="/technology" element={ <TechnologyPage />}/>

        <Route path="/*" element={ <Navigate to='/home' /> }/>
  </Routes>
  )
}
