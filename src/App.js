import React from "react";
import { ModalProvider } from "./modalContext";
import Component from "./component";
// import Component2 from "./component2";
import './App.css'

export default function App() {
  return (
    <div className="App container mx-auto px-8 text-gray-700">
      <h1 className="text-3xl">Hello CodeSandbox</h1>
      <h2 className="text-xl mb-6">Start editing to see some magic happen!</h2>
      {/* <ModalProvider> */}
        <Component />
        {/* <Component2 /> */}
      {/* </ModalProvider> */}
    </div>
  );
}
