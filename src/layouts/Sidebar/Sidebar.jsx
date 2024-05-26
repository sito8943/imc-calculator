import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// @sito/ui
import { IconButton, InputControl, useMode } from "@sito/ui";

// images
import noUser from "../../assets/user-no-image.webp";

function Sidebar(props) {
  const { t } = useTranslation();

  const { mode, toggleMode } = useMode();

  const { open, onClose } = props;

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  const [userName, setUserName] = useState("Sito");
  const handleUserName = (e) => setUserName(e.target.value);

  // form
  const [size, setSize] = useState("");
  const handleSize = (e) => setSize(e.target.value);

  const [weight, setWeight] = useState("");
  const handleWeight = (e) => setWeight(e.target.value);

  const [bmi, setBmi] = useState("");
  const handleBmi = (e) => setBmi(e.target.value);

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full dark:bg-dark/70 backdrop-blur-md transition duration-300 ease-in-out ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <aside
        className={`h-full max-w-66 bg-primary/70 transition duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-[100%]"
        }`}
      >
        <div className="w-full h-full relative p-5 pt-10 flex flex-col items-start justify-start gap-10">
          <IconButton
            name={t("_common:names.buttons.closeMenu")}
            aria-label={t("_common:ariaLabels.buttons.closeMenu")}
            onClick={onClose}
            className=" absolute top-1 right-1"
            icon={<FontAwesomeIcon className="text-light" icon={faClose} />}
          />
          <div className="flex items-center justify-start gap-3 w-full">
            <img className="w-20 rounded-full" src={noUser} alt="user-image" />
            <InputControl
              id="user"
              name={t("_")}
              value={userName}
              placeholder={t("_pages:sidebar.inputs.userName.placeholder")}
              onChange={handleUserName}
            />
          </div>

          <form className="flex flex-col items-start justify-start gap-3 mt-10 w-full">
            <InputControl
              id="size"
              name="size"
              value={size}
              label={t("_pages:sidebar.inputs.size.label")}
              onChange={handleSize}
            />
            <InputControl
              id="weight"
              name="weight"
              value={weight}
              label={t("_pages:sidebar.inputs.weight.label")}
              onChange={handleWeight}
            />
            <InputControl
              id="bmi"
              name="bmi"
              value={bmi}
              label={t("_pages:sidebar.inputs.bmi.label")}
              onChange={handleBmi}
            />
          </form>
          <div className="flex items-center justify-start gap-3">
            <p>{t("_pages:sidebar.mode")}</p>
            <button
              className=""
              onClick={toggleMode}
              name={t("_common:names.buttons.toggleMode")}
              aria-label={t("_common:ariaLabels.buttons.toggleMode")}
            >
              <FontAwesomeIcon icon={mode === "light" ? faMoon : faSun} />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Sidebar;
