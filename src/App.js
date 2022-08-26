import './App.css'
import About from './component/About/About'
import Contacts from './component/Contacts/Contacts'
import Main from './component/Main/Main'
import MyWorks from './component/MyWorks/MyWorks'
import Photo from './component/Photo/Photo'
import Skills from './component/Skills/Skills'

const App = () => {
  return (
    <div className=' bg-stone-300'>
      <div className='md:container md:mx-auto overflow-x-hidden'>
        <Main />
        <Photo />
        <About />
        <Skills />
        <MyWorks />
        <Contacts />
      </div>
    </div>
  )
}

export default App