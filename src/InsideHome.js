import React from "react";
import { useNavigate } from "react-router-dom";

function InsideHome() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Inside Home</h1>
      <button onClick={() => navigate("/staff/home")}>back to home</button>
    </div>
  );
}

export default InsideHome;
