import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Crud from "./Crud";

const Pass = () => {
    const [fetch, setFetch] = useState([]);

    const fetchData = async () => {
        try {
            const fetchRes = await axios.get('http://localhost/LearnPhp/CRUD.php');
            setFetch(fetchRes.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } 
    }

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <Fragment>
            {fetch.map((e, index) => (
                <Fragment key={index}>
                    <h1>{e.NAME}</h1>
                    <h2>{e.DEGREE}</h2>
                </Fragment>
            ))}
            
        </Fragment>
    );
}

export default Pass;
