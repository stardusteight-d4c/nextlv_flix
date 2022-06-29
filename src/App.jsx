import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import Header from './components/Header'
import { SinglePage } from './components/watch/SinglePage'
import { HomePage } from './home/HomePage'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/singlePage/:id" element={<SinglePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
