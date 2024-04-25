// DataView.js
import React from "react";
import CardComp from "../Components/CardComp";
import "./view.css";

<<<<<<< HEAD
const View = () => {
  const storedFormData = JSON.parse(localStorage.getItem("usersData"));
=======
const View = ({ FormData }) => {
  const storedFormData = JSON.parse(localStorage.getItem("formData"));
>>>>>>> 0f2c54eeb8538e4e37a45066e163264a40462908
  console.log("Stored", storedFormData);
  return (
    <div className="container row mt-4">
      {storedFormData?.map((formData, index) => {
        return (
          <div
            className="view-component col-lg-3 col-md-4 col-sm-6 mb-3"
            key={index}
          >
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
