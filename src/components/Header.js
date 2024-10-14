import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATHAR, LANGUAGES, LOGO } from "../utils/constants";
import { toggeleGPT } from "../utils/GPTSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGPTSearch);
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
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);
  const toggeleButton = () => {
    dispatch(toggeleGPT());
  };
  const changeLangHandle =(e)=>{
    dispatch(changeLang(e.target.value))
  }
  return (
    <div className="absolute bg-gradient-to-b from-black w-screen flex justify-between items-center p-4 z-40">
      <img className="w-48 h-20" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-4 pr-8">
          {gptSearch && (
            <select
              onChange={changeLangHandle}
              className="p-2 text-white font-bold bg-red-800 hover:text-red-800 hover:bg-white rounded-lg shadow-xl "
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.indentifier} value={lang.indentifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={toggeleButton}
            className="mt-2 pr-4 p-3 font-bold rounded-lg shadow-2xl text-white m-3 bg-red-800 hover:text-red-700 hover:bg-white"
          >
            {gptSearch ? "Home Page" : "GPT Search"}
          </button>
          <button onClick={clickHandleSignout}>
            <img className="w-14 h-18" src={AVATHAR} alt="signout-logo" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
