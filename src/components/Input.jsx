import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, type, ...props }, ref) {

  return (
    <>
      <div className="input-container">
        <p>{label}</p>
        <input ref={ref} type={type} {...props}></input>
      </div>
    </>
  );
});

export default Input;
