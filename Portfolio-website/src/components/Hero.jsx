import './Hero.css'
import photo from '../assets/Headshot.png'

export default function Hero() {
  //hero section format
  return (
    <section className="hero">
      <div className="hero-avatar">
        <img src={photo} alt="Mustafa" />
      </div>
      <div className="hero-text">
        <h1>FULL-STACK DEVELOPER </h1>
        <p>Currently pursuing a bachelor of Creative Computing at BathSpa University</p>
        <p>In my spare time, I develop and hone my software development skills</p>
      </div>
    </section>
  )
}