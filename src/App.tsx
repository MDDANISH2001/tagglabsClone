import { useEffect } from 'react'
import './App.css'
import { Articles } from './Pages/Articles'
import { Experience } from './Pages/Experience'
import { Features } from './Pages/Features'
import { Footer } from './Pages/Footer'
import { Hero } from './Pages/Hero'
import { Impact } from './Pages/Impact'
import { InfiniteMarquee } from './Pages/InfiniteMarquee'
import { NewsLetter } from './Pages/NewsLetter'
import { Partners } from './Pages/Partners'
import { ReachUs } from './Pages/ReachUs'
import { Teams } from './Pages/Teams'
import { Verticals } from './Pages/Verticals'
import { Work } from './Pages/Work'
import { useRefStore } from './store/useGlobalStore'

function App() {

  const { refs, setRef } = useRefStore();

  useEffect(() => {
    // Initialize refs
    setRef("hero", refs.hero);
    setRef("features", refs.features);
    setRef("work", refs.work);
    setRef("experience", refs.experience);
    setRef("impact", refs.impact);
  }, []);


  return (
    <div className='w-[100vw]'>
      <div ref={refs.hero}>
        <Hero />
      </div>
      <div ref={refs.features}>
        <Features />
      </div>
      <Verticals />
      <div ref={refs.work}>
        <Work />
      </div>
      <div ref={refs.experience}>
        <Experience />
      </div>
      <InfiniteMarquee />
      <div ref={refs.impact} className='sticky top-0 -z-50'>
        <Impact />
      </div>
      <Partners />
      <Articles />
      <Teams />
      <NewsLetter />
      <ReachUs />
      <Footer />
    </div>
  )
}

export default App
