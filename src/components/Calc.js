import React from 'react'
const Calc = ({setResult, result}) => {

  const handleInput = (e) => {
    setResult(result.concat(e.target.value))
  }
  const handleCond = () => {
    setResult("")
  }
  const handleOp = () => {
    try {
      setResult(eval(result))
    }catch(err) {
      setResult("Error")
    }
  }
  return (
    <div className='grid-container'>
        
        
        <button onClick={handleInput} value="7">7</button>
        <button onClick={handleInput} value="8">8</button>
        <button onClick={handleInput} value="9">9</button>
        <button onClick={handleCond} value="CE">CE</button>
        <button onClick={handleInput} value="4">4</button>
        <button onClick={handleInput} value="5">5</button>
        <button onClick={handleInput} value="6">6</button>
        <button onClick={handleInput} value="*">×</button>
        <button onClick={handleInput} value="1">1</button>
        <button onClick={handleInput} value="2">2</button>
        <button onClick={handleInput} value="3">3</button>
        <button onClick={handleInput} value="-">-</button>
        <button onClick={handleInput} value=".">.</button>
        <button onClick={handleInput} value="0">0</button>
        <button onClick={handleInput} value="/">÷</button>
        <button onClick={handleInput} value="+">+</button>
        <button onClick={handleCond} className='span' value="C">C</button>
        <button onClick={handleOp} className='span' value="=">=</button>
      </div>
   
  );
};

export default Calc