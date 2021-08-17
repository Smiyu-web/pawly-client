import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddButton = () => {
  return (
    <div className="flex justify-between mx-10 my-5">
      <div className="add_btn">
        <FontAwesomeIcon icon={faPlus} size="2x" className="text-yellow-400" />
        <p className="text-3xs mt-1">breakfast</p>
      </div>
      <div className="add_btn">
        <FontAwesomeIcon icon={faPlus} size="2x" className="text-yellow-400" />
        <p className="text-3xs mt-1">lunch</p>
      </div>
      <div className="add_btn">
        <FontAwesomeIcon icon={faPlus} size="2x" className="text-yellow-400" />
        <p className="text-3xs mt-1">dinner</p>
      </div>
      <div className="add_btn">
        <FontAwesomeIcon icon={faPlus} size="2x" className="text-yellow-400" />
        <p className="text-3xs mt-1">snack</p>
      </div>
    </div>
  );
};

export default AddButton;
