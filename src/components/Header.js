import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATHAR, LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const clickHandleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         const { uid, email, displayName, photoURL } = user;
         dispatch(
           addUser({
             uid: uid,
             email: email,
             displayName: displayName,
             photoURL: photoURL,
           }),
           navigate("/browse")
         );
       } else {
         dispatch(removeUser());
         navigate("/")
       }
     });
     return ()=> unSubscribe();
   }, []);
  return (
    <div className="absolute bg-gradient-to-b from-black  w-screen justify-between flex z-40">
      <img
        className="w-48 h-20 "
        src= {LOGO}
        alt="logo"
      />
      {user && (
        <div className="mt-5 px-5">
          <button onClick={clickHandleSignout}>
            <img
              className="w-14 h-18 "
              src={AVATHAR}
              alt="signout-logo"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
