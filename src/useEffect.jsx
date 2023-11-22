//HookCounterOne.js File
import { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  //* I replace  "(prevCount) => prevCount + 1 " with "count+1" within setCount()
  return (
    <>
      <div className="age-div">
        <h1>Counter Button :👇 </h1>
        <button onClick={() => setCount(count + 1)}>
          Click {count} times{" "}
        </button>
      </div>
    </>
  );
}
export default HookCounterOne;
