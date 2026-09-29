import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detils from './pages/Details';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Details" element={<Detils />} />
      
    </Routes>
  );
}
