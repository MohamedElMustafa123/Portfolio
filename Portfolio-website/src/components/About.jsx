import { useEffect, useRef } from 'react'
import './About.css'

//array that stores work experince, add more data as you gain experience
const experience = [
  { years: 'MAY 2025 – JULY 2025', role: 'Al Karnak Engineering Consultants, IT Support Specialist', location: 'On Site', detail: "Provided day to day software and hardware troubleshooting for engineers. Diagnosed and resolved technical issues efficently helping maintain smooth workflow and reducing downtime. Communicated clearly with staff to explain options and solutions." },
]



//animation trigger on scroll
export default function About() {
  const sectionRef = useRef(null) 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('in-view')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (

    //main content of about section
    <section id="about" className="about-section" ref={sectionRef}>
      <h2>About</h2>
      <div className="about-grid">
        <p className="about-tagline">Passionate developer specializing in full-stack applications, UI/UX design, and API-driven systems.</p>
        <p className="about-bio">My name is Mustafa, and I'm a Creative Computing student currently pursuing my degree at BathSpa University. I have a strong interest in full-stack development, user experience design, and building practical applications that solve real-world problems. I continuously develop and refine my software skills through hands-on projects, focusing on clean code, usability, and modern development practices.</p>
      </div>
      <div className="exp-list">

      {/*formatting of the experince list */}
        {experience.map(e => (
          <div key={e.years} className="exp-item">
            <span className="exp-years">{e.years}</span>
            <div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-location">{e.location}</div>
              <div className="exp-detail">
                {e.detail.split('. ').map((sentence, i, arr) => (
                  <span key={i}>
                    {sentence}{i < arr.length - 1 ? '.' : ''}<br />
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}