import React from 'react';
const App = () => {
  const changeTheValue = () => {
    console.log("Click me");
    console.log("test-b-1 branch -> success");
  }
  return (
    <div>
      <h1>Hello world.</h1>
      <h2>This is bharati here</h2>
      <button onClick={()=> changeTheValue}>Click me</button>
    </div>
  )
}
export default App;
