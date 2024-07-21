import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignUpPage from './pages/signup/signup';
import LandingPage from "./pages/LandingPage/LandingPage"
import HomePage from './pages/HomePage/HomePage';
import NoteOpened from './pages/NoteOpened/NoteOpended';
import UnAuthenticated from './Components/HOC/UnAuthenticated/UnAuthenticated';
import CreateNotePage from './pages/CreateNotePage/CreateNotePage';
import EditNotePage from './pages/EditNotePage/EditNotePage';
import UnSignedPage from './pages/UnSignedPage/UnSignedPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/signin" element={<LandingPage/>}/>
        <Route path="/home" element={<UnAuthenticated><HomePage/></UnAuthenticated>}/>
        <Route path="/note/:id" element={<UnAuthenticated><NoteOpened /></UnAuthenticated>} />
        <Route path="/note/create" element={<UnAuthenticated><CreateNotePage/></UnAuthenticated>} />
        <Route path="/note/edit/:id" element={<UnAuthenticated><EditNotePage/></UnAuthenticated>} />
        <Route path="/home/unsigned" element={<UnAuthenticated><UnSignedPage /></UnAuthenticated>}/>
        <Route path="/profile" element={<UnAuthenticated><ProfilePage /></UnAuthenticated>} />
      </Routes>
    </Router>
  );
}

export default App;
