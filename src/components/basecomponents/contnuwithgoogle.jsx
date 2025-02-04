import React from "react";
import googlesvg from "../../assets/SVG/google.svg";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "@firebase/auth";
import { app } from "../../Firebase";

const Continuewithgoogle = () => {
  const handlegoogleauthentication = async () => {
    try {
      // Initialize Google Auth Provider
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app); // Get Firebase auth instance

      // Trigger Google Sign-In Popup
      const result = await signInWithPopup(auth, provider);

      // Get the token ID from Firebase after successful authentication
      // const token = await result.user.getIdToken(); here i was verifyiing with google firebase but
      //  back-end says palease send me only the google_id  so i will send it
      const token = result.user.uid;
      console.log(token);

      const res = await fetch(
        "http://192.168.100.56:5000/api/users/freelancers/signupWithGoogle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token, // Send only the token ID
          }),
        }
      );

      const data = await res.json();
      console.log("Received data from server:", data);

      // Optionally, you can dispatch a Redux action or navigate
      // dispatch(signinSuccess(data)); // If using Redux
      // navigate("/"); // Navigate to home page, or wherever you want to go
    } catch (error) {
      console.log("Error with Google Authentication:", error);
    }
  };
  return (
    <div>
      <button
        className="flex  items-center gap-4 bg-custom-blue p-3  text-lg
         md:text-xl mx-auto px-5 lg:px-10 my-10  text-white font-kantumruy font-medium rounded-[10px]"
        onClick={handlegoogleauthentication}
      >
        <img src={googlesvg} className=" w-[14px] h-[14px] md:w-4 md:h-4" />
        contniue with google
      </button>
    </div>
  );
};

export default Continuewithgoogle;
