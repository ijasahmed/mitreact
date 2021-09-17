import react from 'react';
import Aboutus from './Components/About/Aboutus';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';
function App() {
  return (
    <div className="App">
     <NavBar/>
    <Banner/>
    <Aboutus/>
    <Services/>
    <Team/>
    <Contact/>
    <Footer/>

  
    </div>
  );
}

export default App;
