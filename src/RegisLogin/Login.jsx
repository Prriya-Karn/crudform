import axios from "axios";
import React, { Fragment, useState } from "react";
const Login = ()=>{
    const[subLogData,setSubLog] = useState([]);
    const[logData,setLogData] = useState([
        {
            uname : "",
            pass:""
        }
    ]
    );
    const [loginRes,setLoginRes] = useState();

    const logindata = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setLogData((preVal)=>{
           return{
            ...preVal,[name]:value
           }
        })
    }

    const insertLogApi = async()=>{
        const loginForm = new FormData();
        loginForm.append('uname',logData.uname);
        loginForm.append('pass',logData.pass);
       loginForm.append('submit',"SubmitLoginData");
      
        const reslogapi = await axios.post('http://localhost/LearnPhp/Login.php',loginForm);
       if((reslogapi.data).includes("true")){
        setLoginRes("login successfull");
       }else{
        setLoginRes("login not successfull");
       }
    //    console.log((reslogapi.data).includes("true"))
    }
console.log(loginRes);




const submitLog = ()=>{
    setSubLog(logData);
    insertLogApi();
}

// console.log(subLogData)
// console.log(logData)











    return(
        <Fragment>
        <form>
        <h1>{loginRes}</h1>
        <div className="row container-fluid mt-5 mb-5">
     
                <div className="col">
                <input onChange={logindata}  type="text" className="form-control"
                placeholder="user name" name="uname"/>
              </div>


              <div className="col">
                <input onChange={logindata} type="password" className="form-control"
                placeholder="password" name="pass"/>
              </div>


            </div>
            <input onClick={submitLog}
            type="button"
            name = "submit"
            value = "submit"
            />
            </form>
        </Fragment>
    )
}

export default Login;