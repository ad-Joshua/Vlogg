import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();
  return (
    <div>
      <div>Welcome World</div>
      <button onClick={()=>navigate("/staff")}>take to staff</button>
      <button onClick={()=>navigate("/user")}>take to user</button>
    </div>
  );
}

export default Welcome;
