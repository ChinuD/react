// https://youtu.be/Lt4vy8hfc-s?si=46KYIH0OqzA50B20&t=2205

import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useref hook
  const passwordRef = useRef(null);


  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm";

    if (numberAllowed) {
      str += "0987654321";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    console.log(pass);
    
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-center">
        Password Generator
        <div className='className="flex-row shadow rounded-lg overflow-hidden mb-4"'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />

          <button onClick={copyToClipboard} className="ouline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput"> Numbers </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="charInput"> Characters </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
