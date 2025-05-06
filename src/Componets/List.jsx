import React, { useEffect, useState } from "react";
import Data from "../Data/data";
import { useNavigate } from "react-router-dom";

function List() {
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      setAllData(Data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }, []);

  const handleSelect = (fName) => {
    navigate(`/user/${fName}`);
  };

  return (
    <div>
      <h2>User List</h2>
      {allData.map(({ fName, lastName, age }) => (
        <div
          key={age}
          style={{ cursor: "pointer" }}
          onClick={() => handleSelect(fName)}
        >
          <p>{fName}  <span>{lastName}</span> </p>
        </div>
      ))}
    </div>
  );
}

export default List;
