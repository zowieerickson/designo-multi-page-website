import './App.css'
import Nav from "./components/global/Nav"
import Hero from './components/home/Hero'
import Footer from "./components/global/Footer"

function App() {
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <main className="main" role="main">
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default App
