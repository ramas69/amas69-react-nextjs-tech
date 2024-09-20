
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NewAccount from './pages/NewAccount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newuser" element={<NewAccount />} />
      </Routes>
    </div>
  );
}

export default App;
