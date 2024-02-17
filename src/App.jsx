import './App.css'
import SocialApp from './components/SocialApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails/UserDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SocialApp />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App
