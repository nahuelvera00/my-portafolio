import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Layouts
import PageLayout from './layout/PageLayout'

//Pages
import AboutMe from './pages/AboutMe'
import MyLearning from './pages/MyLearning'
import Welcome from './pages/Welcome'
import Proyects from './pages/Proyects'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PageLayout /> } >
          <Route index element={ <Welcome/> } />
          <Route path='about-me' element={ <AboutMe/> } />
          <Route path='my-learning' element={ <MyLearning/> } />
          <Route path='proyects' element={ <Proyects/> } />
          <Route path='contact-me' element={ <ContactMe/> } />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
