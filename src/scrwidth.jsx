import { useState, useEffect } from "react";

export default function Screen_Width() {
  // declear the useState hook
  const [scrWidth, setScrWidth] = useState(window.screen.width);

  const currentScreenWidth = () => {
    setScrWidth(() => window.innerWidth);
  };

  // useEffect declearation
  useEffect(() => {
    // Add the current width of my screen
    window.addEventListener("resize", currentScreenWidth);
    // To remove all previous effects  in console .You can see it in the console window .It is just show you the current data or screen width
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  });

  return (
    <>
      <h1>
        Your Screen Width is: <mark>{scrWidth}</mark>
      </h1>
    </>
  );
}
