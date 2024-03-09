import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Section from './component/Section';
import Plateform from './component/Plateform';
import Section1 from './component/Section1';
import Courses from './component/Courses';
import Strories from './component/Strories';
import Tools from './component/Tools';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Section/>
     <Plateform/>
     <Section1/>
     <Courses/>
     <Strories/>
     <Tools/>
     <Contact/>
     <Footer/>
     
    </div>
  );
}



export default App;
