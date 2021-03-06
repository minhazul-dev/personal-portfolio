
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MyNavbar from './components/Home/MyNavbar/MyNavbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div>
      <MyNavbar/>
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Blogs />
      <ContactMe />
      <Footer />
  
    </div>



  );
}

export default App;
