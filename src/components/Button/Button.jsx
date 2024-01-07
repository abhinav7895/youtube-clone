import React from "react";

const Button = ({ src, alt, className, customClass, onClick }) => {
  return (
    <button onClick={onClick} className={`cursor-poiter flex-shrink-0 ${className}`}>
      <img className={customClass + ""} src={src} alt={alt} />
    </button>
  );
};

export default Button;
