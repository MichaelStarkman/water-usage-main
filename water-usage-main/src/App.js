import Map from './components/Map'
import './App.css';
import 'bootstrap';

//import for bootstrap css
import NavbarComponent from './components/Navbar';

import ModalComponent from './components/modal'
import Hero from './components/Hero.jsx';

import Carousel from './components/Carousel'
import Cards from './components/Cards'
import FooterComponent from './components/Footer';


function App() {
  return (
    <div className="App">

      <header>
        {/* css for bootstrap */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
          crossorigin="anonymous" 
        />

        {/* js for bootstrap */}
        <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" 
          crossorigin="anonymous"
        >

        </script>

      </header>
      <NavbarComponent />
      <Hero />
      <Carousel />
      <Cards />

      
      <Map />
      <FooterComponent />
    </div>
  );
}

export default App;
