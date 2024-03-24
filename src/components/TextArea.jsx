import { forwardRef } from "react";

const TextArea = forwardRef(function TextArea({ label, type, ...props }, ref) {
  return (
    <>
      <div className="text-area-container">
        <p>{label}</p>
        <textarea ref={ref} type={type} {...props}></textarea>
      </div>
    </>
  );
});

export default TextArea;