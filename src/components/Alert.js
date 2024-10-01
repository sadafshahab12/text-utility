import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <>
    <div style={{height : "4rem"}}>
      {props.setalert && (
        <div
          className={`alert alert-${props.setalert.type} alert-dismissible fade show text-center fw-bold rounded-0`}
          role="alert"
        >
          {capitalize(props.setalert.type)} : {props.setalert.msg}
          
        </div>
        
      )}
      </div>
    </>
  );
}
