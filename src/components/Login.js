import { useRef, useState } from "react";
import {checkValidateData} from "../utils/Validate"

const Login = () => {
  const [changeName, setChangeName] = useState(true);
  const [error,setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const phno = useRef(null);
  const clickHandle = (event) => {
    event.preventDefault();
    setChangeName(!changeName);
  };
  const validationHandle =(event)=>{
    event.preventDefault();
    const phone= phno.current ? phno.current.value : null;
    const message = checkValidateData(email.current.value,password.current.value,phone)
    console.log(message)
    setError(message);
  }

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg"
        alt="Bg-image"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <form className="relative z-10 bg-black p-8 rounded-lg shadow-md max-w-sm w-full bg-opacity-70">
        <h2 className="text-2xl font-bold text-red-50 text-center mb-6">
          {changeName ? "Sign In" : "Sign Up"}
        </h2>
        <div className="mb-4">
          {!changeName && (
            <>
              <label className="block text-white font-bold  mb-2">
                User Name
              </label>
              <input
                type="text"
                placeholder="Enter your User Name"
                className="w-full p-3 border rounded-lg"
              />
            </>
          )}

          <label className="block text-white font-bold  mb-2">Email</label>
          <input
            ref={email}
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg"
          />

          {!changeName && (
            <>
              <label className="block text-white font-bold  mb-2">
                Phone Number
              </label>
              <input
                ref={phno}
                type="number"
                placeholder="Enter your Phone Number"
                className="w-full p-3 border rounded-lg"
              />
            </>
          )}

          {!changeName && (
            <>
              <label className="block text-white font-bold  mb-2">
                Enter Password
              </label>
              <input
                ref={password}
                type="password"
                placeholder="Enter your Password"
                className="w-full p-3 border rounded-lg"
              />
            </>
          )}
          <label className="block text-white font-bold mb-2">
            {changeName ? "Password" : "Confirm Password"}
          </label>
          <input
            ref={password}
            type="password"
            placeholder="Enter your password"
            className="w-full p-3  border rounded-lg"
          />
        </div>
        <h3 className="font-bold text-red-700">{error}</h3>
        <div className="py-8">
          <button
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-white font-semibold hover:text-red-700 transition duration-200"
            onClick={validationHandle}
          >
            {changeName ? "Sign In" : "Register here"}
          </button>
          <button className=" font-semibold  text-lg py-2 text-white hover:text-red-500">
            {changeName && "Forget Password?"}
          </button>
          <p className="text-white pt-5 px-4">
            {changeName ? "New to Netflix?  " : "Already you are a User! "}
            <button
              className="font-bold decoration-solid hover:text-red-700 text-lg"
              onClick={clickHandle}
            >
              {changeName ? "Sign up now" : "Sign In now"}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
