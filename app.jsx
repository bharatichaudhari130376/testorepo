import React from 'react';
const App = () => {
  const changeTheValue = () => {
    console.log("Click me");
  }
  return (
    <div>
      <h1>Hello world.</h1>
      <button onClick={()=> changeTheValue}>Click me</button>
      <footer> All rights are reserved by dhiraj.</footer>
    </div>
  )
}
export default App;
