import React from "react";
import { useForm } from "react-hook-form";

const Create = () => {
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
      <h1>Create</h1>

      <section className="container-fluid px-5 my-5">
        <div className="container-fluid px-5 my-5">
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3 border">
            <div className="col-md-4 gx-5 my-4">
              <label htmlFor="inputText6" className="col-form-label">
                Name
              </label>
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
              <label className="col-form-label">Email</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                aria-describedby="textHelpInline"
              />
              {errors.email && (
                <span className="invalid-feedback">
                  Please enter a valid email address
                </span>
              )}
            </div>
            <div className="col-md-4 gx-5 my-4">
              <label htmlFor="inputNumber6" className="col-form-label">
                Contact Number
              </label>
              <input
                {...register("phone", { required: true, pattern: /^\d{10}$/ })}
                type="number"
                id="inputNumber6"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                aria-describedby="numberHelpInline"
              />
              {errors.phone && (
                <span className="invalid-feedback">
                  Please enter a valid phone number
                </span>
              )}
            </div>
            <div className="col-md-4 gx-5 my-4">
              <label htmlFor="radio" className="col-form-label">
                Gender
              </label>
              <div>
                <input
                  type="radio"
                  value="male"
                  {...register("gender", { required: true })}
                  className="me-1"
                />
                <label>Male</label>
                <input
                  type="radio"
                  value="female"
                  {...register("gender", { required: true })}
                  className="ms-4 me-1"
                />
                <label>Female</label>
                <input
                  type="radio"
                  value="Others"
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
              <label htmlFor="inputCategory6" className="col-form-label">
                Category
              </label>
              <select className="form-control">
                <option>Select</option>
                <option>General</option>
                <option>SC/ST</option>
                <option>OBC</option>
              </select>
              {errors.category && (
                <span className="invalid-feedback">
                  Please select a category
                </span>
              )}
            </div>
            <div className="col-md-4 gx-5 my-4">
              <label htmlFor="inputFile6" className="col-form-label">
                Upload image
              </label>
              <input
                {...register("image", {
                  required: true,
                  validate: validateFile,
                })}
                type="file"
                id="inpuFile6"
                className={`form-control-file ${
                  errors.image ? "is-invalid" : ""
                }`}
                accept=".jpg, .jpeg, .png"
                aria-describedby="textHelpInline"
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
            <div className="col-12 gx-5 my-4">
              <label htmlFor="inputAddress" className="form-label">
                Technologies
              </label>
              <div>
                <input
                  type="checkbox"
                  value="c++"
                  {...register("technologies")}
                  className="me-1"
                />
                <label className="mr-3 ml-1">C++</label>
                <input
                  type="checkbox"
                  value="javascript"
                  {...register("technologies")}
                  className="ms-3 me-1"
                />
                <label className="mr-3">JavaScript</label>
                <input
                  type="checkbox"
                  value="c"
                  {...register("technologies")}
                  className="ms-3 me-1"
                />
                <label className="mr-3 ml-1">C</label>
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
                <input
                  type="checkbox"
                  value="c#"
                  {...register("technologies")}
                  className="ms-3 me-1"
                />
                <label>C#</label>
              </div>
            </div>
            <div className="text-center col-12 g-4 my-4">
              <button type="button" className="btn btn-outline-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Create;
