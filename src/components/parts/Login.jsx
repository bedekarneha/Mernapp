import React, { useState, useEffect } from "react";
import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const navigation = useNavigate();
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const user=localStorage.getItem('user');
    if(user){
      return navigation('/')
    }
  }, [])
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const result = await login(form);
      console.log("Submitting form:", form, "Result:", result.data);
      setErrors(null)

      if (result.status === 200) {
        if (result.data.status === 200) {
          localStorage.setItem('user', JSON.stringify(result.data.data));
          navigation("/");
          return;
        }

        if (result.data.status === 201) {
          setErrors(result.data.data)
          return;
        }
        if (result.data.status === 202) {
          toast(result.data.message);
          return;
        }
      }
    } catch (error) {
      console.error("Error while logging in:", error);
      setErrors(error.message || "Something went wrong!");
    }
  };


  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-lg-5 card brder-primary mt-4">
          <div className="card-body">
            <h4 className="card-title">Login Now</h4>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                Email or Username
              </label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email or Username"
                name="username"
              />
              {errors?.username&&( 
              <small id="emailHelp" className="form-text text-muted">
               {errors.username.msg}
              </small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="form-label mt-4">
                Password
              </label>
              <input
                type="password"
                onChange={handleChange}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Password"
                name="password"
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;



