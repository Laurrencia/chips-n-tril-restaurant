import "./App.css";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonial from"./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <About/>
      <Menu/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
