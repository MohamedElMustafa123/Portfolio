import { useEffect, useRef } from 'react'
import WorkItem from './WorkItem'
import './FeaturedWork.css'
import hound from '../assets/hound.png'
import gamereview from '../assets/Gamereview.png'
import pokemon from '../assets/pokemon.png'
import focus from '../assets/Focusentrix.png'


//projects in the feauted work sections can add more whenever.
const projects = [
  {
    title: 'E-commerce Front-end design',
    description: 'E-commerce website UX design, fully designed and developed independently.',
    image: hound,
    href: 'https://hound-webdev-2.vercel.app/',
    side: 'left'
  },
  {
    title: 'Focusentrix - Focus/Producitivty Web App',
    description: 'A productivity web app that helps users stay focused using real time attention monitoring with MediaPipe. It includes features like a Pomodoro timer, to-do list, and focus analytics, all built with React and Tailwind CSS.',
    image: focus,
    href: 'https://focusentrix.vercel.app/',
    side: 'right'
  },
  {
    title: 'Pokémon Deck',
    description: 'Developed a Python application using Tkinter that fetches data from an API to display Pokémon stats and images, with features to compare and view random Pokémon.',
    image: pokemon,
    href: 'https://youtu.be/WY66bZO1478',
    side: 'left'
  }
]

//on scroll trigger animation
export default function FeaturedWork() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('in-view')
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (

    /*format of featured work section */
    <section className="featured-section" id="work" ref={sectionRef}>
      <div className="featured-sticky">
        <h2 className="featured-label">Featured work</h2>
        <p className="featured-hint">
          <span className="word">(SCROLL</span>
          <span className="word">TO</span>
          <span className="word">EXPLORE)</span>
        </p>
      </div>

      {/*project cards list - passing projects as proprs to the WorkItem component */}
      <div className="featured-cards">
        {projects.map((p, i) => (
          <WorkItem key={i} {...p} />
        ))}
      </div>
    </section>
  )
}