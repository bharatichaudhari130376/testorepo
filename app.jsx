import React from 'react';
const App = () => {
  const changeTheValue = () => {
    console.log("Click me");
    console.log("Main branch -> Success")
  }
  return (
    <div>
      <h1>Hello world.</h1>
      <button onClick={()=> changeTheValue}>Click me</button>
    </div>
  )
}
export default App;
