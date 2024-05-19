import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixLOGO, profileICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign in or signup
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        //sign out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleGPTsearch = () => {
    // toggle gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-gray-950 z-50 flex justify-between">
      <img className="w-44" src={netflixLOGO} />
      {user && (
        <div className="flex mr-8 gap-x-6 ">
          {showGptSearch && (
            <select
              onChange={handleLangChange}
              className="my-6 px-5 border-solid border-white border-2 text-white h-8 rounded-md bg-transparent"
            >
              {SUPPORTED_LANG.map((lang) => (
                <option
                  className="bg-transparent"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTsearch}
            className="my-6 px-5 border-solid border-white border-2 text-white h-8 rounded-md"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-12 h-12 my-4" src={profileICON} />
          <button
            onClick={handleSignOut}
            className="my-6 px-5 border-solid border-white border-2 text-white h-8 rounded-md "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
