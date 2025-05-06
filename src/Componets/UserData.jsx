import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/data";

function UserDetails() {
  const { fName } = useParams();

  const user = Data.find((item) => item.fName === fName);

  if (!user) return <h2>User Not Found</h2>;

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>First Name:</strong> {user.fName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  );
}

export default UserDetails;
