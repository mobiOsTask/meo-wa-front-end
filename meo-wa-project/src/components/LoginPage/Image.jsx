import React from 'react';
import img19 from "../../assets/Group 19.png";
import img7 from "../../assets/Group 7.png";

const Image = () => {
  return (
    <>
      <img
        src={img7}
        alt=""
        style={{
          width: "552px",
          height: "630px",
          marginLeft: "-60px",
          marginTop: "28px",
        }}
      />

      <img
        src={img19}
        alt=""
        style={{
          width: "530px",
          height: "438px",
          position: "absolute",
          marginLeft: "-530px",
          marginTop: "134px",
        }}
      />
    </>
  )
}

export default Image