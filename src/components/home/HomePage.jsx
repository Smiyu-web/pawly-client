import React from "react";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* <h1 className="font-medium">PAWLY</h1> */}
      <FontAwesomeIcon icon={faPaw} size="7x" className="paw" />
      <h6>Welcome, pawfriend!</h6>
      <h6 className="text-gray-500 font-semibold mt-2">sign in</h6>
    </div>
  );
};

export default HomePage;
