import './App.css';
import NavBar from './components/users/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/users/dashboard';
import About from './components/users/about';

function App() {
  return (
    <div>
      <div class="md:h-screen">
        <NavBar></NavBar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    //<div>
    //
    //</div>
  );
}

export default App;
