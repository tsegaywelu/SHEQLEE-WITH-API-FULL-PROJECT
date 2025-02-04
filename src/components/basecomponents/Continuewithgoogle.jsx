import React from "react";
import googlesvg from "../../assets/SVG/google.svg";
import { GoogleLogin } from "@react-oauth/google";

const Continuewithgoogle = () => {
  const handleSuccess = async (credentialResponse) => {
    try {
      const googleToken = credentialResponse.credential; // This is the Google ID token

      console.log("Google ID Token:", googleToken);

      // Send the Google ID token to the backend
      const res = await fetch(
        "http://192.168.100.56:5000/api/users/freelancers/signupWithGoogle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: googleToken }), // Send only the Google token
        }
      );

      const data = await res.json();
      console.log("Received data from server:", data);
    } catch (error) {
      console.log("Error during Google authentication:", error);
    }
  };

  const handleFailure = (error) => {
    console.log("Google Sign-In Error:", error);
  };
  return (
    <div className="relative ">
      <div className="absolute">
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </div>

      <button
        className="  flex  items-center gap-4 bg-custom-blue p-3  text-lg
         md:text-xl mx-auto px-5 lg:px-10 my-10  text-white font-kantumruy font-medium rounded-[10px]"
      >
        <img src={googlesvg} className=" w-[14px] h-[14px] md:w-4 md:h-4" />
        contniue with google
      </button>
    </div>
  );
};

export default Continuewithgoogle;
