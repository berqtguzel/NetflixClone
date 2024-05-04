import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import ProfilesPage from './pages/Profiles/ProfilesPages';
import MainPages from "./pages/Main/MainPages"

function App() {
  return (
    <>
     <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Login' element={<LoginPage/>}></Route>
        <Route path='/profile' element={<ProfilesPage/>}></Route>
        <Route path='/main' element={<MainPages/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
