import { Button } from "@sito/ui";
import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Modal(props) {
  const { t } = useTranslation();
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
        <div className="flex items-center justify-end w-full gap-5 mt-5">
          <Button
            shape="filled"
            name={t("_common:names.buttons.ok")}
            aria-label={t("_common:ariaLabels.buttons.okDialog")}
          >
            {t("_common:buttons.ok")}
          </Button>
          <Button
            shape="outlined"
            color="primary"
            onClick={handleClose}
            name={t("_common:names.buttons.cancel")}
            aria-label={t("_common:ariaLabels.buttons.cancel")}
          >
            {t("_common:buttons.cancel")}
          </Button>
        </div>
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
