import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  const getData = async() => {
    const res = await Axios.get("http://localhost:5000/getData");
    setData(res.data);
  }

  useEffect(() => {
    getData();
  },[]);
  
  return (
    <>
    <div>{data}</div>
    </>
  );
}

export default App;
