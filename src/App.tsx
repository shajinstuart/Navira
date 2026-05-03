import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductShowcase from './components/ProductShowcase'
import MedicinalValues from './components/MedicinalValues'
import WhyNavira from './components/WhyNavira'
import BrandStoryVideo from './components/BrandStoryVideo'
import ReelsSection from './components/ReelsSection'
import AboutUs from './components/AboutUs'
import FAQSection from './components/FAQSection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <MedicinalValues />
        <WhyNavira />
        <BrandStoryVideo />
        <ReelsSection />
        <AboutUs />
        <FAQSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App
