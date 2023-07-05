import React from "react";
import './App.css';
import NewTable from "./Pages/NewTable";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
    <NewTable/>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={(e) => (e.preventDefault())}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light" />
    </div>
  );
}

export default App;
