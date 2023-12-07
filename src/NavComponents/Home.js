import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import InsideHome from "../InsideHome";
import axios from "axios";
import { useEffect } from "react";

function Home(){
    
    const navigate = useNavigate();
    const [data, setData] = useState('');

    useEffect(() =>{
        axios.get('http://localhost:8080/vloger/impmessage')
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }, [])

    return(
        <div>
            <h1>Home Component</h1> 
            <h2>{data}</h2>
            {console.log("home page")}
            <button onClick={()=>navigate("/staff/home/insidehome")}>Inside Home</button>
            <Routes>
            <Route path="/home/*" Component={Home} />
                <Route path="/insidehome" Component={InsideHome}/>
            </Routes>
        </div>
    )
}

export default Home;