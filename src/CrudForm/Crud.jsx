import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Crud = ()=>{
    const [sub,setsub] = useState([]);
    const [fetch, setFetch] = useState([]);
    const [datas,setData] = useState(
        {
            name : "",
            degree : "",
            mobile : "",
            email : "",
            refer : "",
            jobpost : ""
        }
    );

    const enterData = (event)=>{
        const value = event.target.value;
        const name = event.target.name;
        setData((preVal)=>{
            return{
                ...preVal,[name]:value
            }
        })
    }

    // console.log(data);

   const insertData = async ()=>{
    const form = new FormData();
    form.append('name',datas.name);
    form.append('degree',datas.degree);
    form.append('mobile',datas.mobile);
    form.append('email',datas.email);
    form.append('refer',datas.refer);
    form.append('jobpost',datas.jobpost);
    form.append('submit','Submittss');
    try{
        const res = await axios.post("http://localhost/LearnPhp/CRUD.php",form);
        // console.log(res.data);
        fetchData();
      
    }catch{
        console.log("error");
    }
   }


   const datasubmit = (event)=>{
    setsub(datas);
      insertData();  
   }

   
 
   const fetchData = async () => {
     try {
         const fetchRes = await axios.get('http://localhost/LearnPhp/FetchData.php');
         setFetch(fetchRes.data);
       
     } catch (error) {
         console.error("Error fetching data:", error);
     } 
 }
 
 useEffect(() => {
     fetchData();
 },[]);
 
 
// console.log(fetch)



const del = async (id)=>{
  const delForm = new FormData();
  delForm.append('delete',"Del")
  const delData = await axios.post(`http://localhost/LearnPhp/Update.php?id=${id}`,delForm);
  console.log(delData.data);
  fetchData();
 }
useEffect(()=>{
del();
},[]);




    return(
        <Fragment>
        <form>
      
        <div className="row container-fluid mt-5">
       <div className="col">
         <input type="text" className="form-control"  onChange={enterData}
         placeholder="enter your name *" required name="name"/>
       </div>
       <div className="col">
         <input type="text" className="form-control"  onChange={enterData}
         placeholder="Degree" name="degree"/>
       </div>
     </div>
 
     <div className="row container-fluid mt-5">
     <div className="col">
       <input type="number" className="form-control"  onChange={enterData}
       placeholder="mobile number" name="mobile"/>
     </div>
     <div className="col">
       <input type="email" className="form-control"  onChange={enterData}
       placeholder="email id" name="email"/>
     </div>
   </div>
 
   <div className="row container-fluid mt-5">
   <div className="col">
     <input type="text" className="form-control"  onChange={enterData}
     placeholder="reference" name="refer"/>
   </div>
   <div className="col">
     <input type="text" className="form-control"  onChange={enterData}
     placeholder="job post" name="jobpost"/>
   </div>
 </div>
 <input
 type="button"
 name = "submit"
 value = "submit"
 onClick={datasubmit}
 />
  </form>

  {
    fetch.map((e)=>{
      return(
        <Fragment>
        <h1 className="mt-5">{e.ID}</h1>
        <h2>{e.NAME}</h2>
        <NavLink exact to = {`/update/${e.ID}`}>
        <input
        type="button"
        name = "update"
        value="update"
        />
        </NavLink>
       
        <input type="button" onClick={()=>{del(e.ID)}}
        name = "delete"
        value = "delete"
        /> 
   
       
        </Fragment>
      )
    })
  }
 </Fragment>
    )
    
}


export default Crud;

