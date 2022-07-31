import './index.scss'
import Background from './Background'
import { React, setState } from 'react'
import Loader from 'react-loaders'
function Home() {
  //   const [mathOn, setMathOn] = setState(false)

  return (
    <>
      <div className="container home-page">
        <div className="background-design">
          <Background />
        </div>
        <div className="text-zone">
          <h1>Giving Life To Codes</h1>
          <p>Developer | UI/UX</p>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Home
