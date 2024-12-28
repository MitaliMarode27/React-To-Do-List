import Home from "./Home";
import TodoList from "./TodoList";
import "./index.css";
import { Route,Routes } from "react-router-dom";


const App = () => {
  return(
  <>
   <Routes>
   <Route path="/" element={<Home/>}/>
    <Route path="/todolist" element={<TodoList/>}/>
   </Routes>
    </>
)
}

export default App;