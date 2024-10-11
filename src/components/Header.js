import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const clickHandleSignout = () => {    
    signOut(auth)
      .then(() => {   
        navigate("/")
        
      })
      .catch((error) => {
        
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black  w-screen justify-between flex z-40">
      <img
        className="w-48 h-20 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="mt-5 px-5">
        <button onClick={clickHandleSignout}>
          <img
            className="w-14 h-18 "
            src={user.photoURL}
            alt="signout-logo"
          />
        </button>
      </div>}
    </div>
  );
};

export default Header;
