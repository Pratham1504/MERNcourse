import './App.css';
import { Routes ,Route,useParams } from 'react-router-dom';
import{ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Crud from './crud';
import Update from "./crud/Update";
function App() {
  return (
    <div className="App">
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Crud />}/>
          <Route path="/Update/:id" element={<Update />}/>
        </Routes>
      </div>
      
    </div>
    
  );
}

export default App;