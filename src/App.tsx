import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Recommended } from './components/Recommended'
import { CaseStudies } from './components/CaseStudies'
import { PromoStrip } from './components/PromoStrip'
import { EnterpriseTech } from './components/EnterpriseTech'
import { InsideIBM } from './components/InsideIBM'
import { StayConnected } from './components/StayConnected'
import { Footer } from './components/Footer'
import './styles/app.scss'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Recommended />
        <CaseStudies />
        <PromoStrip />
        <EnterpriseTech />
        <InsideIBM />
        <StayConnected />
      </main>
      <Footer />
    </>
  )
}

export default App
