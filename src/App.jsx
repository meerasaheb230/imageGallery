

import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./components/Home";
import {Search} from "./components/Search";

function App() {

  return (
    <div className="App">

          <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search/:search" element={<Search/>} />
        </Routes>
          </BrowserRouter> 
    </div>
  )
}

export default App;
