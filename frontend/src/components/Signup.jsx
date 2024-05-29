import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        const userInfo = {
          email: data.email,
          password: data.password,
        };
        await axios
          .post("http://localhost:4001/user/login", userInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              toast.success("Loggedin Successfully");
              document.getElementById("my_modal_3").close();
              setTimeout(() => {
                window.location.reload();
                localStorage.setItem("Users", JSON.stringify(res.data.user));
              }, 1000);
            }
          })
          .catch((err) => {
            if (err.response) {
              console.log(err);
              toast.error("Error: " + err.response.data.message);
              setTimeout(() => {}, 2000);
            }
          });
      };

  return (
    <>
      <div
        id="my_modal_3"
        className="signupModal h-screen flex justify-center items-center"
      >
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Signup</h3>
          <div className="mt-4">
            <span> Name</span>

            <label className="input input-bordered flex items-center gap-2 w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className=""
                placeholder="enter your Full name"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </label>
            
            
            <span>Email</span>

            <label className="input input-bordered flex items-center gap-2 w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="enter your email"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </label>
            <span>Password</span>

            <label className="input input-bordered flex items-center gap-2 w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="enter your password"
                {...register("password", { required: true })}
                
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </label>
            <br/>
            
          </div>
          <div className="mt-5 flex justify-around content-center">
            <button className="bg-pink-500 btn-secondary text-white hover:bg-pink-800 hover:text-black  w-16 h-8 rounded-md">
              Signup
            </button>
            <p>
              Already registered?{" "}
              <Link to="/" className="underline text-blue-500 cursor-pointer">
                Login
              </Link>{" "}
            </p>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
