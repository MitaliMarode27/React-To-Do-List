import "./index.css";
import { NavLink } from "react-router-dom";
import { ArrowDownward } from "@material-ui/icons";

const Home = () => {
  return (
    <>
      <img
        className="img img-fluid"
        src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_1_8_638403208885977231_to-do-list-la-gi-1.jpg"
        alt=""
        style={{ height: "100vh", width: "100%", objectFit: "cover" }}
      />
      <div className="box d-flex flex-column justify-content-center align-items-center text-center position-absolute top-50 start-50 translate-middle w-100">
        <div className="px-3">
          <p style={{fontSize:"35px"}}>
            Create Your <span style={{ color: "beige", fontSize:"3rem" }}>Own</span>
          </p>
          <p style={{fontSize:"35px"}}>
            <span style={{ color: "beige",fontSize:"3rem" }}>To-Do</span> List here{" "}
            <ArrowDownward style={{ fontSize: "4rem" }} />
          </p>
          <NavLink exact to="/todolist">
            <button className="clickBtn btn btn-outline-light">
              Create
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Home;
