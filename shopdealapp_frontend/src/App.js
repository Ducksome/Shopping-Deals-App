import { Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Signup from './views/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;
