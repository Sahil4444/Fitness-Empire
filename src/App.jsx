import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSession from './components/WorkoutSession';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BMIcalculator from './components/BMIcalculator';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkoutSession />
      <Gallery />
      <Pricing />
      <BMIcalculator />
      <Contact />
      <Footer />
      <ToastContainer theme='dark' position='top-center' />
    </>
  )
}

export default App
