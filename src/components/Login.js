import Header from "./Header";
import { CheckName, checkEmailPassword } from "../utils/validate";
import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { backgroundIMG } from "../utils/constants";

const Login = () => {
  const [isSignedIn, setSignedIn] = useState(true);
  const [errorMessage1, setErrorMessage1] = useState(null);
  const [errorMessage2, setErrorMessage2] = useState(null);

  const dispatch = useDispatch();
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const ToggleEventHandler = () => {
    isSignedIn ? setSignedIn(false) : setSignedIn(true);
  };

  const handleEvent = () => {
    //validate form
    let message1;
    if (isSignedIn === false) {
      message1 = CheckName(fullName?.current?.value);
      setErrorMessage1(message1);
    }
    const message2 = checkEmailPassword(
      email.current.value,
      password.current.value,
    );
    setErrorMessage2(message2);
    console.log(email.current.value, password.current.value);
    console.log(message1, message2);

    if (message1 && message2) return;
    if (!isSignedIn) {
      // sign up page
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName }),
              );
              // Profile updated!
            })
            .catch((error) => {
              // An error occurred
              // setErrorMessage1(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage2(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in page
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage2(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      <Header />
      <img src={backgroundIMG} alt="bg_img" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-2/5 p-10 bg-black top-[120px] mx-auto right-0 left-0 flex flex-col bg-opacity-75 rounded-md"
      >
        <h1 className="text-white font-bold text-3xl pb-6">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignedIn === false && (
          <>
            <input
              ref={fullName}
              type="text"
              className="p-4 mx-6 my-3 text-white bg-slate-600 bg-opacity-40 border-solid border-[1px] border-gray-500 rounded-md"
              placeholder="Full Name"
            />
            <p className="text-red-500 px-6">{errorMessage1}</p>
          </>
        )}
        <input
          ref={email}
          type="email"
          className="p-4 mx-6 my-3 text-white bg-slate-600 bg-opacity-40 border-solid border-[1px] border-gray-500 rounded-md"
          placeholder="Email"
        />
        <input
          ref={password}
          type="password"
          className="p-4 mx-6 my-3 text-white bg-slate-600 bg-opacity-40 border-solid border-[1px] border-gray-500 rounded-md"
          placeholder="Password"
        />
        <p className="px-6 text-red-500">{errorMessage2} </p>

        <button
          onClick={handleEvent}
          className="text-white bg-red-700 p-2 mx-6 my-2 rounded-md"
        >
          {isSignedIn ? "Sign in" : "Sign Up"}
        </button>
        <p className=" text-white p-2 mx-6">
          {isSignedIn ? (
            <>
              <span>New to Netflix? </span>{" "}
              <span
                className="cursor-pointer hover:underline "
                onClick={ToggleEventHandler}
              >
                {" "}
                Sign Up now
              </span>
            </>
          ) : (
            <>
              Already a user?{" "}
              <span
                className="cursor-pointer hover:underline"
                onClick={ToggleEventHandler}
              >
                {" "}
                Sign In
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;

//when we click on sign in button it is trying to submit the form and to prevent that event we use "e.preventDefault()"
