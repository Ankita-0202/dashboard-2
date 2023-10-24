import './App.css';
import Dashboard from './dashboard';
import Navcol from './nav';

function App() {
  
  return (
    <>
    <div style={{display:'flex' , gap:'15px'}}>
      <Navcol /> 
      <Dashboard />

    </div>
    </> 
  );
}

export default App;

