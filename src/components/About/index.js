import './index.scss'
import skills from '../../assets/images/skills.svg'
import Loader from 'react-loaders'
const About = () => {
  return (
    <>
      <div className="container about-page">
        <img src={skills} alt="Skills" />
        <div className="text-zone">
          <h1>About Me</h1>
          <p>
            I was first introduced to programming when I was 14. After asking my
            teacher that I want to do what my seniors were doing, she gave me
            the software and resources needed to start. Ever since that day,
            programming has been my passion and I never stopped studying since
            then. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            assumenda natus impedit? Commodi voluptate accusantium laudantium
            excepturi nostrum fuga eius dolore temporibus, dolorum, possimus eum
            necessitatibus aliquam, minima sed dignissimos.
          </p>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default About
