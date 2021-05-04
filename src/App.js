
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Blogs />
      <ContactMe />
      <Footer />
      <MessengerCustomerChat
    pageId="102340855359939"
    appId="119270633519552"
    htmlRef="https://personal-portfolio-208c4.web.app/"
  />
    </div>



  );
}

export default App;
