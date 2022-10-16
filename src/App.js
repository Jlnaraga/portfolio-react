import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About me</Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="resume">Resume</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="Portfolio" element={<Portfolio />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="resume" element={<Resume />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export const Home = () => {
  return <div>You are in Home page</div>
}
export const About = () => {
  return <div>This is the page where you put details about yourself</div>
}
export const NotFound = () => {
  return <div>This is a 404 page</div>
}
    
export default App;
