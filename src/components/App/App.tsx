import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ComponentA } from '../ComponentA/ComponentA';
import { ComponentB } from '../ComponentB/ComponentB';
import { LanguagePicker } from "../LanguagePicker/LanguagePicker";
import { ComponentStringsContext, generateComponentStringsContext } from "../../hooks/useGetComponentStrings";

function App() {
  const [appComponentStrings, setAppComponentStrings] = useState(generateComponentStringsContext({components: {}}));
  return (
    <div className="App">
      <ComponentStringsContext.Provider value={appComponentStrings}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <LanguagePicker resetAppLanguage={(data) => setAppComponentStrings(generateComponentStringsContext(data))}/>
          🖱️ 👇
        </header>
        <div>
          <ComponentA propOne={"the first prop"} propTwo={22}/>
          <ComponentB/>
        </div>
      </ComponentStringsContext.Provider>
    </div>
  );
}

export default App;
