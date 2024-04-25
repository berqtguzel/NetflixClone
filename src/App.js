import './App.css';
import NetflixMainPage from './components/NetflixMainPage/NetflixMainPage';
import NetflixNavbar from './components/NetflixNavbar/NetflixNavbar';

function App() {
  return (
    <div className="app">
     <NetflixNavbar/>
     <NetflixMainPage/>
    </div>
  );
}

export default App;
