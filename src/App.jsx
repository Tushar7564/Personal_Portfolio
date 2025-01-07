import './App.css';
import 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banner';
import { NavBar } from './Components/Navbar';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
