import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<LandingPage/>} path="/"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
