import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDebounce } from "use-lodash-debounce";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// @sito/ui
import { IconButton, InputControl, useMode } from "@sito/ui";

// providers
import { useAccount } from "../../providers/AccountProvider";

// images
import noUser from "../../assets/user-no-image.webp";

function Sidebar(props) {
  const { t } = useTranslation();

  const { updateAttribute } = useAccount();
  const { mode, toggleMode } = useMode();

  const { open, onClose } = props;

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  const [userName, setUserName] = useState("Nameless");
  const debouncedUserName = useDebounce(size, 800);

  useEffect(() => {
    updateAttribute("userName", debouncedUserName);
  }, [debouncedUserName, updateAttribute]);

  // form
  const [size, setSize] = useState("");
  const debouncedSize = useDebounce(size, 800);

  useEffect(() => {
    updateAttribute("size", debouncedSize);
  }, [debouncedSize, updateAttribute]);

  const [weight, setWeight] = useState("");
  const debouncedWeight = useDebounce(weight, 800);

  useEffect(() => {
    updateAttribute("weight", debouncedWeight);
  }, [debouncedWeight, updateAttribute]);

  const [bmi, setBmi] = useState("");
  const debouncedBmi = useDebounce(bmi, 800);

  useEffect(() => {
    updateAttribute("bmi", debouncedBmi);
  }, [debouncedBmi, updateAttribute]);

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
              name={t("_common:names.inputs.userName")}
              value={userName}
              placeholder={t("_pages:sidebar.inputs.userName.placeholder")}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <form className="flex flex-col items-start justify-start gap-3 mt-10 w-full">
            <InputControl
              id="size"
              name={t("_common:names.inputs.size")}
              value={size}
              label={t("_pages:sidebar.inputs.size.label")}
              onChange={(e) => setSize(e.target.value)}
            />
            <InputControl
              id="weight"
              name={t("_common:names.inputs.weight")}
              value={weight}
              label={t("_pages:sidebar.inputs.weight.label")}
              onChange={(e) => setWeight(e.target.value)}
            />
            <InputControl
              id="bmi"
              name={t("_common:names.inputs.bmi")}
              value={bmi}
              label={t("_pages:sidebar.inputs.bmi.label")}
              onChange={(e) => setBmi(e.target.value)}
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
