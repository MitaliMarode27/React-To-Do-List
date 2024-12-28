import { NavLink } from 'react-router-dom';
import './index.css';


const Api = () => {
 return(
 <>
 <div className="d-flex justify-content-evenly mt-4 shadow-lg p-3">
 <NavLink style={{fontSize:"normal", fontWeight:"2rem"}} to="/starter" className="line pb-2 text-dark text-decoration-none "><strong>Starter</strong></NavLink>
 <NavLink style={{fontSize:"normal", fontWeight:"2rem"}} to="/main" className="line pb-2 text-dark text-decoration-none"><strong>Main Course</strong></NavLink>
 <NavLink style={{fontSize:"normal", fontWeight:"2rem"}} to="/dessert" className="line pb-2 text-dark text-decoration-none"><strong>Dessert</strong></NavLink>
 </div>


</>
)
}

export default Api;