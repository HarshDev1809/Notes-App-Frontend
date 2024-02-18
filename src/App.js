import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignInPage from './pages/signin/signin';
import SignUpPage from './pages/signup/signup';
import LandingPage from "./pages/LandingPage/LandingPage"
import HomePage from './pages/HomePage/HomePage';
import NoteOpened from './pages/NoteOpened/NoteOpended';
import UnAuthenticated from './Components/HOC/UnAuthenticated/UnAuthenticated';
import CreateNotePage from './pages/CreateNotePage/CreateNotePage';
import EditNotePage from './pages/EditNotePage/EditNotePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/signin" element={<LandingPage/>}/>
        <Route path="/home" element={<UnAuthenticated><HomePage/></UnAuthenticated>}/>
        <Route path="/note/:id" element={<NoteOpened />} />
        <Route path="/note/create" element={<CreateNotePage/>} />
        <Route path="/note/edit/:id" element={<EditNotePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
