import React from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();

  return (
    <div>
      Welcome users
      <button onClick={() => navigate("/")}>Back to welcome page</button>
    </div>
  );
}

export default UserLogin;
