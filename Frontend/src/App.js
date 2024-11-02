
import './App.css';
import ColorSchemesExample from './components1/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutCarousel from './components1/Slideshow';
import ControlledTabsExample from './components1/Switchtabs';
import ScanOptionCard from './components1/Scan';
import UseCases from './components1/Usecase';

function App() {
  return (
    <div className="App">

      <ColorSchemesExample></ColorSchemesExample>
      <div>
      <AboutCarousel></AboutCarousel>
    </div>
    <div className="group-example-container">
      
      <ControlledTabsExample/>
      <div>
        <UseCases/>
      </div>
      <div className='scanda'>
        <ScanOptionCard/>
      </div>
      
      
      
    </div>
    
  
    </div>
    
  )
}

export default App;
