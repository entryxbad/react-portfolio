import './App.css'
import About from './component/About/About'
import Main from './component/Main/Main'
import MyWorks from './component/MyWorks/MyWorks'
import Navbar from './component/Navbar/Navbar'
import Skills from './component/Skills/Skills'
import Contact from './component/Contact/Contact'

const App = () => {
  return (
    <div >
      <Navbar />
      <Main />
      <About />
      <Skills />
      <MyWorks />
      <Contact />
    </div>
  )
}

export default App