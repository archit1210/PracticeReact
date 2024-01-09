//import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-center bg-red-600 text-white-3xl py-4">
      User : {userid}
    </div>
  );
}

export default User;
