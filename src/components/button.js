import React from "react";

const button = props => {
  const { children, ...buttonProps } = props;

  return (
    <button
      className="px-2 py-1 rounded-lg bg-green-400 text-green-800 text-xl font-light uppercase shadow-md hover:shadow-lg"
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default button;
