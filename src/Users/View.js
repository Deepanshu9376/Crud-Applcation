// DataView.js
import React from "react";
import CardComp from "../Components/CardComp";
import "./view.css";

const View = ({ FormData }) => {
  const storedFormData = JSON.parse(localStorage.getItem("formData"));
  console.log("Stored", storedFormData);
  return (
    <div className="container row mt-4">
      {storedFormData?.map((formData) => {
        return (
          <div className="view-component col-lg-3 col-md-4 col-sm-6 mb-3 ">
            <CardComp
              name={formData.name}
              email={formData.email}
              contact={formData.contact}
              gender={formData.gender}
              category={formData.category}
              technologies={formData.technologies}
            />
          </div>
        );
      })}
    </div>
  );
};

export default View;
