import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UniversityDetails from './pages/UniversityDetails';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home selectedOption={selectedOption} setSelectedOption={setSelectedOption} />} />
        <Route exact path='/university/:id' element={<UniversityDetails selectedOption={selectedOption} />} />
      </Routes>
    </Router>
  )
}

export default App;