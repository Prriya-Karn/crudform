import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Registration = ()=>{
    const [SubData,SetSubData] = useState([]);
    const [data,setData] = useState([
        {
            fname : "",
            lname : "",
            email : "",
            country : "",
            number : "",
            password:"",
            cpassword:""
        }
    ]);


    const inputData = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData((preVal)=>{
            return{
                ...preVal,[name]:value
            }
        })
    }

const registerClick = (event)=>{
    // event.preventDefault()
    SetSubData(data);
    insertionAPI();   
}


// console.log(SubData);


const insertionAPI = async()=>{
    const formInsert = new FormData();
    formInsert.append('fname',data.fname); 
    formInsert.append('lname',data.lname); 
    formInsert.append('email',data.email); 
    formInsert.append('country',data.country); 
    formInsert.append('number',data.number); 
    formInsert.append('password',data.password); 
    formInsert.append('cpassword',data.cpassword); 
    formInsert.append('register','registers');
    try{
        const inres = await axios.post('http://localhost/LearnPhp/Registration.php',formInsert)
        console.log(inres);
        fetchRegis();
    }

    catch{
        console.log("error");
    }
   
}


const fetchRegis = async ()=>{
  try{
    const infetch = await axios.post('http://localhost/LearnPhp/Registration.php');
    console.log(infetch);
}

catch{
    console.log("error");
}

}











  return(
        <Fragment>
        <form>
        <div className="row container-fluid mt-5">
     
                <div className="col">
                <input onChange={inputData} type="text" className="form-control"
                placeholder="first name" required name="fname"/>
              </div>
              <div className="col">
                <input onChange={inputData} type="text" className="form-control"
                placeholder="last name" name="lname"/>
              </div>
            </div>
        
            <div className="row container-fluid mt-5">
            <div className="col">
              <input onChange={inputData} type="email" className="form-control"
              placeholder="email address" name="email"/>
            </div>
            <div className="col">
              <input onChange={inputData} type="text" className="form-control" 
              placeholder="country" name="country"/>
            </div>
          </div>
        
          <div className="row container-fluid mt-5">
          <div className="col">
            <input onChange={inputData} type="number" className="form-control" 
            placeholder="phone number" name="number"/>
          </div>

          <div className="col">
            <input onChange={inputData} type="password" className="form-control"   
            placeholder="password" name="password"/>
          </div>

          <div className="col mb-5">
          <input onChange={inputData} type="password" className="form-control"   
          placeholder="change password" name="cpassword"/>
        </div>
        </div>
        <input onClick={registerClick}
        type="button"
        name = "register"
        value = "register"
        />
         
        <NavLink exact to="/login">
        <input
        type="button"
        name = "login"
        value = "login"
        />
        </NavLink>
    
  </form>
        </Fragment>
    )
}

export default Registration;