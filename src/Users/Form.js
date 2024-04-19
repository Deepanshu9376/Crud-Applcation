import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const validateFile = (value) => {
    if (!value[0]) return true;
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const fileExtension = value[0].name.split(".").pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
  };

  return (
    <>
    <div className="create"></div>
      <div className="container-fluid px-5 my-2 .bg-dark">
        <h1>Create</h1>
      </div>
      <section className="container-fluid px-5 my-5 ">
        <div className="container-fluid px-5 my-5">
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3 border">
            <div className="col-md-4 gx-5 my-4">
              <label className="col-form-label">Name:</label>
              <input
                {...register("name", {
                  required: true,
                  pattern: /^[a-zA-Z\s]+$/,
                  maxLength: 30,
                  minLength: 2,
                })}
                type="text"
                id="inputText6"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                aria-describedby="textHelpInline"
              />
              {errors.name && (
                <span className="invalid-feedback">This field is required</span>
              )}
            </div>
            <div className="col-md-4 gx-5 my-4">
              <label className="col-form-label">Phone Number:</label>
              <input
                {...register("phone", { required: true, pattern: /^\d{10}$/ })}
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              />
              {errors.phone && (
                <span className="invalid-feedback">
                  Please enter a valid phone number
                </span>
              )}
            </div>
            <div className="col-md-4 gx-5 my-4">
              <label className="col-form-label">Email:</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <span className="invalid-feedback">
                  Please enter a valid email address
                </span>
              )}
            </div>
            <div className="col-md-4 gx-5 my-4">
              <label className="col-form-label">Upload Image:</label>
              <input
                type="file"
                {...register("image", {
                  required: true,
                  validate: validateFile,
                })}
                className={`form-control-file ${
                  errors.image ? "is-invalid" : ""
                }`}
                accept=".jpg, .jpeg, .png"
              />
              {errors.image && errors.image.type === "validate" && (
                <span className="invalid-feedback">
                  Please upload an image with .jpg, .jpeg, or .png extension
                </span>
              )}
              {errors.image && errors.image.type !== "validate" && (
                <span className="invalid-feedback">This field is required</span>
              )}
            </div>
            <div className="col-md-4 gx-5 my-4">
              <label className="col-form-label">Gender:</label>
              <div>
                <input
                  type="radio"
                  value="male"
                  {...register("gender", { required: true })}
                  className="me-1"
                />
                <label className="mr-3 ml-1">Male</label>
                <input
                  type="radio"
                  value="female"
                  {...register("gender", { required: true })}
                  className="ms-4 me-1"
                />
                <label>Female</label>
                <input
                  type="radio"
                  value="others"
                  {...register("gender", { required: true })}
                  className="ms-4 me-1"
                />
                <label>Others</label>
              </div>
              {errors.gender && (
                <span className="invalid-feedback d-block">
                  Please select a gender
                </span>
              )}
            </div>
            <div className="col-md-4 gx-5 my-4">
              <label className="col-form-label">Category:</label>
              <select
                {...register("category", { required: true })}
                className={`form-control ${
                  errors.category ? "is-invalid" : ""
                }`}
              >
                <option value="general">General</option>
                <option value="sc/st">SC/ST</option>
                <option value="others">Others</option>
              </select>
              {errors.category && (
                <span className="invalid-feedback">
                  Please select a category
                </span>
              )}
            </div>
            <div className="col-12 gx-5 my-4">
              <label className="col-form-label">Technologies:</label>
              <div>
                <input
                  type="checkbox"
                  value="c"
                  {...register("technologies")}
                  className="ms-3 me-1"
                />
                <label className="mr-3 ml-1">C</label>
                <input
                  type="checkbox"
                  value="c++"
                  {...register("technologies")}
                  className="ms-3 me-1"
                />
                <label className="mr-3 ml-1">C++</label>
                <input
                  type="checkbox"
                  value="c#"
                  {...register("technologies")}
                  className="ms-3 me-1"
                />
                <label>C#</label>
                <input
                  type="checkbox"
                  value="javascript"
                  {...register("technologies")}
                  className="ms-3 me-1"
                />
                <label className="mr-3">JavaScript</label>
                <input
                  type="checkbox"
                  value="python"
                  {...register("technologies")}
                  className="ms-3 me-1"
                />
                <label className="mr-3">Python</label>
                <input
                  type="checkbox"
                  value="typescript"
                  {...register("technologies")}
                  className="ms-3 me-1"
                />
                <label>TypeScript</label>
                <input
                  type="checkbox"
                  value="java"
                  {...register("technologies")}
                  className="ms-3 me-1"
                />
                <label>Java</label>
                <input
                  type="checkbox"
                  value="ruby"
                  {...register("technologies")}
                  className="ms-3 me-1"
                />
                <label>Ruby</label>
              </div>
            </div>
            <div className="text-center col-12 g-4 my-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
