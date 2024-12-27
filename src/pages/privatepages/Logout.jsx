import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signoutsuccess } from "../../redux/user/user.slice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Dispatch the action to clear the Redux state
    dispatch(signoutsuccess());

    // Redirect to the login page
    navigate("/sheqlee/login");
  }, [dispatch, navigate]);

  return <div></div>;
};

export default Logout;
