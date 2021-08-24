import React from "react";
import BarLoader from "react-spinners/BarLoader";

const Loading = ({ isLoading }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <BarLoader loading={isLoading} size={50} color="#FBBF23" />
    </div>
  );
};

export default Loading;
