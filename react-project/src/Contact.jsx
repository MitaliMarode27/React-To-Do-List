import { useState } from "react";

const Contact = () => { 
const [name, setName] = useState('')
const [show, setShow] = useState('')
 return(
    <>
      <h4 className="text-center display-6 mt-4">Contact Us</h4>
      <div className='d-flex justify-content-center align-items-center' style={{height:"80vh", width:"100%"}}>
      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{height:"450px", width:"500px"}}>
         <div className="row mt-3">
  <div className="col">
    <input value={name} onChange={(evt) => setName(evt.target.value)} type="text" className="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
<br />
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label>Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label >Password</label>
</div>
<br />
<h3>Choose your Course</h3>

<select value={show} onChange={(evt) => setShow(evt.target.value)}  className="form-select" aria-label="Default select example">
  <option selected> select One Course</option>
  <option value="Web Development">Web Development</option>
  <option value="App Development">App Development</option>
  <option value="Software Development">Software Development</option>
  <option value="Machine Learning">Machine Learning</option>
  <option value="Data Science">Data Science</option>
  <option value="Digital Marteting">Digital Marteting</option>
</select>
<br />
 {show && <p className="text-dark">You Choose {show} worth Rupees 20,000</p>}

<button data-bs-target="#mymodel" data-bs-toggle="modal" className="btn btn-outline-primary">Buy Now </button>

      <div className="modal fade" id="mymodel">
        <div className="modal-dialog text-center"></div>
          <div className="modal-content text-center bg-dark text-white mt-4 p-4" style={{position:"absolute", left:"510px", top:"10rem", width:"500px"}}>
               <h2>Congratulations Dear {name}🎊</h2>
                      <p>You Buy {show} Course ! Thank You.. </p>
                   
          </div>
      </div>
 </div>

</div>
       </>
    )
 }
 
 export default Contact;