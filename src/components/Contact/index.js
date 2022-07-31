import { useRef } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import emailjs from '@emailjs/browser'
import config from '../../config'

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        `${config.my_service_id}`,
        `${config.my_template_id}`,
        refForm.current,
        `${config.my_public_key}`
      )
      .then(
        () => {
          alert('Message succesfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message! Please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <h1>Contact Me</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          dolor laboriosam fuga ullam quia ut. Praesentium omnis vero ut
          voluptate, architecto ex aut reiciendis sapiente ad accusamus,
          possimus fugiat minima?
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Contact
