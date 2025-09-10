import React from "react";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {

    const navigate = useNavigate()

 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm() 

  

  const onSubmit = async (data) => {

      const res = await fetch("http://127.0.0.1:8000/api/authenticate", {


           method:'POST',
           headers : {

              'Content-type' : 'application/json'
           },

            body: JSON.stringify(data)
      });

      const result = await res.json();

    if (result.status === false) {


         
         toast.error(result.message || "Login Failed");
    } else{


        localStorage.setItem("token", result.token);
       localStorage.setItem("user_id", result.id);


         navigate('/admin/dashboard');
    }
      
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600 mb-1"
            >
              Email
            </label>
            <input 


{...register('email')}

              type="email"
              id="email"
              placeholder="Enter your email"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

         
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input

            {
                ...register('password')
            }
              type="password"
              id="password"
              placeholder="Enter your password"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Login
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
