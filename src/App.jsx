import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // TO increment my age using useState hook
  const [age, setAge] = useState(18);
  const incAge = () => setAge(age + 1); //***increase the age
  const decAge = () => (age === 0 ? setAge(0) : setAge(age - 1)); //****Decrease the age using ternary operator

  //? if-else statement for decrement the age and this will stop when 0 will occour
  // const decAge = () => {
  //   if(age === 0){
  //     setAge(0);
  //   }
  //   else{
  //   setAge(age - 1);
  // }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Div for my Age changing hook */}
      <div className="age-div">
        {/*Changing  my age using react hooks (useState) */}
        <h1>
          My age is : <mark> {age} </mark>
        </h1>
        {/* Decrease My Age from 18  */}
        <button onClick={decAge}> Decrease Age (-)</button>
        {/* Increment Age from 18 (initially) */}
        <button onClick={incAge}> Increase Age (+)</button>
      </div>

      <div className="card">
        <p className="edit-src">
          Edit{" "}
          <code>
            {" "}
            <mark>src/App.jsx</mark>
          </code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
