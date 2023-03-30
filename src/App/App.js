import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import StepOneForm from './Components/stepOneForm/stepOneForm';
import StepTwoForm from './Components/steoTwoForm/stepTwoForm';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StepOneForm />} exact> </Route>
        </Routes>
        <Routes>
          <Route path="/step1" element={<StepOneForm />} exact> </Route>
        </Routes>
        <Routes>
          <Route path="/step2" element={<StepTwoForm />} exact> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
