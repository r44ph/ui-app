import logo from './logo.svg';
import './App.css';
import { Navbar, CTA } from './components'
import { Courses, Discover, Hero  } from './containers'


function App() {
  return (
    <div className='hero__color'>
      <div>
        <Navbar />
        <Hero />
      </div>

    </div>
  );
}

export default App;
