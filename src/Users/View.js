// DataView.js
import React from "react";
import CardComp from "../Components/CardComp";

const View = ({ FormData }) => {
  const storedFormData = JSON.parse(localStorage.getItem("form"));
  console.log("Stored", storedFormData);
  return (
    <div className="container mt-4">
      <CardComp
        name={storedFormData.name}
        contact={storedFormData.contact}
        email={storedFormData.email}
        gender={storedFormData.gender}
        category={storedFormData.category}
        technologies={storedFormData.technologies}
      />
    </div>
  );
};

export default View;
