import React, { Fragment } from "react";
const Fetch = ({fetch})=>{
    return(
        <Fragment>
        {
            fetch.map((e, index) => (
            <Fragment key={index}>
            <h1 className="mt-5">{e.ID}</h1><span><button>Update</button></span>
        
                <h1>{e.NAME}</h1>
                <h2>{e.DEGREE}</h2>
            </Fragment>
        ))
        
        }
        </Fragment>
    )
}

export default Fetch;