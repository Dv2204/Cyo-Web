import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Loader = ({ color }) => (
  <div className="full-page-loader" style={{ alignSelf: "center" }}>
    <BeatLoader size={70} color={color} laoading={true} />
  </div>
);

export default Loader;
