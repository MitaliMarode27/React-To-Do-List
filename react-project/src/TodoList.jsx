import { useState, useEffect } from "react";
import "./index.css";

const TodoList = () => {
  const [items, setItems] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedList = localStorage.getItem("todoList");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const trackItems = (event) => {
    setItems(event.target.value);
  };

  const addToList = () => {
    if (editIndex !== null) {
      setList((oldItems) =>
        oldItems.map((item, index) => (index === editIndex ? items : item))
      );
      setEditIndex(null);
    } else {
      setList((oldItems) => [...oldItems, items]);
    }
    setItems("");
  };

  const deleteItems = (id) => {
    setList((oldItems) => oldItems.filter((_, idx) => idx !== id));
  };

  const removeAll = () => {
    setList([]);
  };

  const editItem = (index) => {
    setItems(list[index]);
    setEditIndex(index);
  };

  return (
    <div className="container-fluid todolist-container mainImg">
      <img
        className="bannerImg"
        src="https://plus.unsplash.com/premium_photo-1683309563562-aa3cfde9ed10?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9kbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D"
        alt=""
      />
      <div className="banner">
        <div className="text-center py-4">
          <p className="display-6 text-white">
            <span className="highlight">D</span>ont make a{" "}
            <span className="highlight highlight-special">Wishlist</span>
          </p>
          <p className="display-6 text-white">
            <span className="highlight">M</span>ake a{" "}
            <span className="highlight highlight-special">To-Do</span> List....✏️
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="inputBox d-flex align-items-center mb-5">
              <input
                value={items}
                name="items"
                onChange={trackItems}
                type="text"
                placeholder="What you want to do..."
                className="form-control"
                aria-label="Task input"
              />
              <button onClick={addToList} className="addbtn btn btn-outline-dark">
                {editIndex !== null ? "Update" : "Add"}
              </button>
            </div>

            <ul className="list-group mb-5">
              {list.map((val, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                  {val}
                  <div>
                    <button onClick={() => editItem(i)} className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button onClick={() => deleteItems(i)} className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {list.length > 0 && (
              <button onClick={removeAll} className="btn btn-dark w-100">
                Remove All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;