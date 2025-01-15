import React from "react";
import ReactDOM from "react-dom/client"; // Cambiamos a react-dom/client
import './index.css';
import App from './App';

const rootElement = document.querySelector("#root");


const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
