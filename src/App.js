import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Calc from './components/Calc';
function App() {
  //startActivityForResult,onActivityResult
  const [result, setResult] = useState("")
  return (
    <>
      <div className='calculator'>
        <Header />
        <form>
          <input type="text" value={result} className='user-input' />  
        </form>
        <Calc setResult={setResult} result={result} />
      </div>
    </>
  );
}

export default App;
