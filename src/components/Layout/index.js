import './index.scss'
import Topbar from '../Topbar'
import { Outlet } from 'react-router-dom'
import stars from '../../assets/images/stars.jpg'

const Layout = () => {
  return (
    <div className="App">
      <img src={stars} alt="" className="background-image" />
      <Topbar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
