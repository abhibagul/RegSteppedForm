import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import StepOneForm from './Components/stepOneForm/stepOneForm';
import StepTwoForm from './Components/steoTwoForm/stepTwoForm';
import SidebarProgress from './Components/sidebarProgress/sidebarProgress';
function App() {
  return (
    <div className="App">
      <div className='regFormContainer'>
        <aside className='regFormSidebar'>
          <div className='sidebarInner'>
            <SidebarProgress/>
          </div>
        </aside>
        <main className='regFormMain'>
          <div className='regFormInner'>
            
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
        </main>
      </div>
    </div>
  );
}

export default App;
