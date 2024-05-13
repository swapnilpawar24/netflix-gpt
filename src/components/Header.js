import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixLOGO, profileICON } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-gray-950 z-50 flex justify-between">
      <img
        className="w-44"
        src={netflixLOGO}
      />
      {user && (
        <div className="flex mr-8 gap-x-8 ">
          <img
            className="w-12 h-12 my-4"
            src={profileICON}
          />
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
