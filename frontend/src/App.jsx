import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import ExecBoard from './components/ExecBoard'
import JoinCTA from './components/JoinCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <ExecBoard />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
