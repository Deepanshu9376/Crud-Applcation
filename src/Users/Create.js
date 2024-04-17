import React, {useState} from 'react'

function Create() {
    const [userinfo, setUserInfo] = useState({
        languages: [],
        response: [],
    });
 
    const handleChange = (e) => {
        const { value, checked } = e.target;
        const { languages } = userinfo;
 
        console.log(`${value} is ${checked}`);

        if (checked) {
            setUserInfo({
                languages: [...languages, value],
                response: [...languages, value],
            });
        }
 
        else {
            setUserInfo({
                languages: languages.filter(
                    (e) => e !== value
                ),
                response: languages.filter(
                    (e) => e !== value
                ),
            });
        }
    };
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type='text' placeholder='Enter your name..'></input>
                </div>
                <div>
                    <label>Gender</label>
                    <label>Male</label>
                    <input type='radio' ></input>
                    <label>Female</label>
                    <input type='radio' ></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' placeholder='Enter your mail..'></input>
                </div>
                <div>
                    <label>Mobile</label>
                    <input type='text' placeholder='Enter Mobile no..'></input>
                </div>
                <div>
                    <label>Category</label>
                    <select>
                        <option value="General">General</option>
                        <option value="Sc/St">SC/ST</option>
                        <option value="OBC">OBC</option>

                    </select>
                </div>
                <div>
                    <label>Technologies</label>
                    <select>
                        <option value="General">General</option>
                        <option value="Sc/St">SC/ST</option>
                        <option value="OBC">OBC</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Javascript"
                                id="flexCheckDefault"
                                onChange={
                                    handleChange
                                }
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                Javascript
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Python"
                                id="flexCheckDefault"
                                onChange={
                                    handleChange
                                }
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                Python
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Java"
                                id="flexCheckDefault"
                                onChange={
                                    handleChange
                                }
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                Java
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="PHP"
                                id="flexCheckDefault"
                                onChange={
                                    handleChange
                                }
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                PHP
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="C#"
                                id="flexCheckDefault"
                                onChange={
                                    handleChange
                                }
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                C#
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="C++"
                                id="flexCheckDefault"
                                onChange={
                                    handleChange
                                }
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                C++
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="C"
                                id="flexCheckDefault"
                                onChange={
                                    handleChange
                                }
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                C
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Typescript"
                                id="flexCheckDefault"
                                onChange={
                                    handleChange
                                }
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                Typescript
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-control mt-3 mb-3 text-center">
                    <label htmlFor="exampleFormControlTextarea1">
                        You're proficient in the
                        following languages :{" "}
                    </label>
                    <textarea
                        className="form-control text"
                        name="response"
                        value={userinfo.response}
                        placeholder="The checkbox values will be displayed here "
                        id="floatingTextarea2"
                        style={{ height: "150px" }}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
            {/* Hello from create js */}
        </div>
    )
}

export default Create
