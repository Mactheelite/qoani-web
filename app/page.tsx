import Hero from './features/Hero';
import Services from './features/Services';
import Stats from './features/Stats';
import About from './features/About';
import Testimonials from './features/Testimonials';
import Blog from './features/Blog';
import Contact from './features/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
