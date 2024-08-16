import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = ()=>{
    const {id} = useParams();
    const [sub,setUp] = useState([]);
    const [fetch, setFetch] = useState([]);
    const [dataup,setData] = useState(
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
    const formUpd = new FormData();
    formUpd.append('id',id);
    formUpd.append('name',dataup.name);
    formUpd.append('degree',dataup.degree);
    formUpd.append('mobile',dataup.mobile);
    formUpd.append('email',dataup.email);
    formUpd.append('refer',dataup.refer);
    formUpd.append('jobpost',dataup.jobpost);
    formUpd.append('update','Update');

    try{
        const res = await axios.post(`http://localhost/LearnPhp/Update.php?id=${id}`,formUpd);
        console.log(res.data);
      
      
    }catch{
        console.log("error");
    }
   }

   const dataUpdate = (event)=>{
    setUp(dataup);
   
      insertData();
  
      
   }


   const fetchUp = async()=>{
    const UpFetchRes = await axios.get(`http://localhost/LearnPhp/Update.php?id=${id}`);
    const data = UpFetchRes.data;
   console.log(data)
    
   const fetchres = data.find((e)=>{
    return (e)
   })

   setData({
    name : fetchres.NAME,
    degree : fetchres.DEGREE,
    mobile:fetchres.MOBILE,
    email:fetchres.EMAIL,
    refer:fetchres.REFER,
    jobpost:fetchres.JOBPOST

   })
//    console.log(dataup)
   }
   useEffect(()=>{
    fetchUp();
   },[])

   console.log(fetch);



    return(
        <Fragment>
   
        <form>
        
        <div className="row container-fluid mt-5">
     
                <div className="col">
                <input type="text" className="form-control" value = {dataup.name}  onChange={enterData}
                placeholder="" required name="name"/>
              </div>
              <div className="col">
                <input type="text" className="form-control" value={dataup.degree} onChange={enterData}
                placeholder="" name="degree"/>
              </div>
            </div>
        
            <div className="row container-fluid mt-5">
            <div className="col">
              <input type="number" className="form-control" value={dataup.mobile}    onChange={enterData}
              placeholder="" name="mobile"/>
            </div>
            <div className="col">
              <input type="email" className="form-control" value={dataup.email}  onChange={enterData}
              placeholder="" name="email"/>
            </div>
          </div>
        
          <div className="row container-fluid mt-5">
          <div className="col">
            <input type="text" className="form-control" value={dataup.refer}   onChange={enterData}
            placeholder="" name="refer"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" value={dataup.jobpost}   onChange={enterData}
            placeholder="" name="jobpost"/>
          </div>
        </div>
        <input
        type="button"
        name = "update"
        value = "update"
        onClick={dataUpdate}
        />
           
          
     
         
  </form>
 </Fragment>
    )
    
}


export default Update;

