import "./App.css";
import {Header} from "./Components/Header/Header"
import {BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <main>

        <Routes>
          <Route path="/" element={<h1>Benvenuto</h1>}/>
          <Route path="/cart" element={<h1>Carrito</h1>}/>
        
        </Routes>
      </main>
      </BrowserRouter>
    </>
  )
}

export default App

