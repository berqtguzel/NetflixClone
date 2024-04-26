import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Login/LoginPage';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/Login' element={<LoginPage/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
