import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>BootStrap</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-ligth'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
        {/* {End front end} */}

        <div className="experience_frontend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Node Js</h4>
                <small className='text-ligth'>Bacis</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Express</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-ligth'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-ligth'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience