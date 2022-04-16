
import './App.css';
import {Country} from "./components/Country"
import {EditCountry} from "./components/Edit"
import {Routes,Route,Link} from "react-router-dom"
import{Details} from "./components/Details"



function App() {
  return (
    <div className="App">
    <header>
      <Link to={"/"}>

      </Link>

    </header>
   <Routes>
     <Route path="/" element={<Country/>}></Route>
     <Route path="/country/:id/edit" element={<EditCountry/>}></Route>
     <Route path="/country/:id" element={<Details/>}></Route>

   </Routes>
    </div>
  );
}

export default App;
