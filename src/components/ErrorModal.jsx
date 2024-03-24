import { useRef } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";

const ErrorModal = forwardRef(function ErrorModal({}, dialogRef) {
  const dialogModalRef = useRef();
  useImperativeHandle(dialogRef, () => {
    return {
      openModal() {
        dialogModalRef.current.showModal();
      },
      closeModal() {
        dialogModalRef.current.close();
      },
    };
  });
  return createPortal(
    <>
      <dialog ref={dialogModalRef}>
        <p>It's a duplicate name. Try different name.</p>
        <button onClick={() => dialogRef.current.closeModal()}>
          Close
        </button>
      </dialog>
    </>,
    document.getElementById('modal-root')
  );
});

export default ErrorModal;
