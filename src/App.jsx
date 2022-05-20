import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Layouts
import PageLayout from './layout/PageLayout'

//Pages
import AboutMe from './pages/AboutMe'
import MyLearning from './pages/MyLearning'
import MyLearning2 from './pages/MyLearning-2'
import MyLearning3 from './pages/MyLearning3'
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
          <Route path='my-learning-2' element={ <MyLearning2/> } />
          <Route path='my-learning-3' element={ <MyLearning3/> } />
          <Route path='proyects' element={ <Proyects/> } />
          <Route path='contact-me' element={ <ContactMe/> } />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
