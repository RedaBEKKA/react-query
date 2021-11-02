import { useState } from "react";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
function App() {
  const [page,setPage] = useState('Planets');
  return (
    <div className="App">
      <h1>Star wars Infos</h1>
      <Navbar setPage={setPage}/>
      <div className="content">
        {page === 'Planets' ? <Planets/> : <People/>}
      </div>
    </div>
  );
}

export default App;
