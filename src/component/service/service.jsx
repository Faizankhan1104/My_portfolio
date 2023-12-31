import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>User Interface (UI) Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>User Experience (UX) Research:</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Wireframing and Prototyping: </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Usability Testing:</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Accessibility and Inclusivity Design:</p>
            </li>
          </ul>
        </article>
        {/* END OF UI UX */}

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Custom Website Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Front-end Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Back-end Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>E-commerce Website Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web Application Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>API Development aur Integration:</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service_head">
            <h3>Web Designing</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Website Redesign</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Logo aur Branding Design</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Website Graphics aur Multimedia</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>SEO-friendly Design</p>
            </li>
          </ul>
        </article>
        {/* END OF UI UX */}
  
      </div>
    </section>
    
  )
}

export default service