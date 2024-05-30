import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@sito/ui";
import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";

function Modal(props) {
  const { title, open, handleClose, children } = props;

  const handleEscape = useCallback(
    (e) => {
      const { key } = e;
      if (key === "Escape") handleClose();
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <>
      <div
        onClick={handleClose}
        className={`fixed top-0 left-0 w-screen h-screen transition duration-300 ease-in-out bg-primary/10 backdrop-blur-md z-10 ${
          !open ? "pointer-events-none opacity-0" : ""
        }`}
      />
      <dialog
        open={open}
        className="p-5 modal rounded-md z-10 bg-primary fixed open:animate-scale-in open:backdrop:animate-fade-in"
      >
        <h3 className="text-light">{title}</h3>
        <div className="mt-5">{children}</div>
      </dialog>
    </>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.any,
  handleClose: PropTypes.func,
  title: PropTypes.string,
};

export default Modal;
