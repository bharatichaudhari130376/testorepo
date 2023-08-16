import React from 'react';
const App = () => {
  const changeTheValue = () => {
    console.log("Click me");
  }
  return (
    <div>
      <h1>Hello world.</h1>
      <button onClick={()=> changeTheValue}>Click me</button>
    </div>
  )
}
export default App;
