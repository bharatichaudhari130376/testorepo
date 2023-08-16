import React from 'react';
const App = () => {
  const changeTheVal = () => {
    console.log("Click me");
  }
  return (
    <div>
      <h1>Hello world.</h1>
      <button onClick={()=> changeTheValue}</button>>Click me</button>
    </div>
  )
}
export default App;
