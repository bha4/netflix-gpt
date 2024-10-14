import { useRef, useState } from "react";
import { checkValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [changeName, setChangeName] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const phno = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const clickHandle = (event) => {
    event.preventDefault();
    setChangeName(!changeName);
  };

  const validationHandle = (event) => {
    event.preventDefault();
    const phone = phno.current ? phno.current.value : null;
    const userName = name.current ? name.current.value : null;
    const message = checkValidateData(
      email.current.value,
      password.current.value,
      phone
    );
    setError(message);
    if (message) return;
    if (!changeName) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName,
            photoURL: "https://avatars.githubusercontent.com/u/117166175?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setError(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="relative flex items-center justify-center h-screen bg-gray-100">
        <img
          src={BG_URL}
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
                <label className="block text-white font-bold mb-2">
                  User Name
                </label>
                <input
                  ref={name}
                  type="text"
                  placeholder="Enter your User Name"
                  className="w-full p-3 border rounded-lg"
                />
              </>
            )}

            <label className="block text-white font-bold mb-2">Email</label>
            <input
              ref={email}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg"
            />

            {!changeName && (
              <>
                <label className="block text-white font-bold mb-2">
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

            <label className="block text-white font-bold mb-2">Password</label>
            <input
              ref={password}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg"
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
            {changeName && (
              <button className="font-semibold text-lg py-2 text-white hover:text-red-500">
                Forget Password?
              </button>
            )}
            <p className="text-white pt-5 px-4">
              {changeName ? "New to Netflix?  " : "Already a User! "}
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
    </>
  );
};

export default Login;
