import React from "react";
import Link from "next/link";

import router, { useRouter } from "next/router";

import {
  faHome,
  faUtensils,
  faWalking,
  faWeight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nabvar = () => {
  const router = useRouter();

  return (
    <div className="nabvar">
      <Link href="/">
        <div className="navbar_icon">
          <FontAwesomeIcon icon={faHome} size="lg" />
          <p className="text-xs font-medium">HOME</p>
        </div>
      </Link>
      <div className="navbar_icon" onClick={() => router.push("/meal")}>
        <FontAwesomeIcon icon={faUtensils} size="lg" />
        <p className="text-xs font-medium">MEAL</p>
      </div>
      <div className="navbar_icon" onClick={() => router.push("/active")}>
        <FontAwesomeIcon icon={faWalking} size="lg" />
        <p className="text-xs font-medium">ACTIVE</p>
      </div>
      <div className="navbar_icon" onClick={() => router.push("/weight")}>
        <FontAwesomeIcon icon={faWeight} size="lg" />
        <p className="text-xs font-medium">WEIGHT</p>
      </div>
      <div className="navbar_icon" onClick={() => router.push("/user")}>
        <FontAwesomeIcon icon={faUser} size="lg" />
        <p className="text-xs font-medium">USER</p>
      </div>
    </div>
  );
};

export default Nabvar;
