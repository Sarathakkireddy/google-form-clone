import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Createform from "./components/generate_form/Createform";
import ViewForm from "./components/ViewForm";
import ViewFormSubmitted from "./components/ViewFormSubmitted";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/cf" element={<Createform />} />
          <Route path="/view/:userid/:formid" element={ <ViewForm/>}/>
          <Route path="/finish" element={<ViewFormSubmitted/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
