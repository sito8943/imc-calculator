import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
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

  const { account, updateAttribute } = useAccount();
  const { mode, toggleMode } = useMode();

  const { open, onClose } = props;

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  const [userName, setUserName] = useState(
    account?.user?.userName ?? "Nameless"
  );
  const debouncedUserName = useDebounce(userName, 800);

  useEffect(() => {
    updateAttribute("userName", debouncedUserName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedUserName]);

  // form
  const [height, setHeight] = useState(account?.user?.height ?? "");
  const debouncedHeight = useDebounce(height, 800);

  useEffect(() => {
    updateAttribute("height", debouncedHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedHeight]);

  const [weight, setWeight] = useState(account?.user?.weight ?? "");
  const debouncedWeight = useDebounce(weight, 800);

  useEffect(() => {
    updateAttribute("weight", debouncedWeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedWeight]);

  const [bmi, setBmi] = useState(account?.user?.bmi ?? "");
  const debouncedBmi = useDebounce(bmi, 800);

  useEffect(() => {
    console.log("bmi");
    setBmi(weight / (height * height));
  }, [weight, height]);

  const bmiResult = useMemo(() => {
    if (!Number.isNaN(bmi))
      switch (true) {
        case bmi < 18.5:
          return "underweight";
        case bmi > 18.5 && bmi < 24.9:
          return "normal";
        case bmi > 25 && bmi < 29.9:
          return "overweight";
        case bmi >= 30:
          return "obesity";
      }
    return "";
  }, [bmi]);

  const bmiResultStyle = useMemo(() => {
    switch (bmiResult) {
      case "normal":
        return "text-success";
      case "underweight":
      case "overweight":
        return "text-warning";
      case "obesity":
        return "text-error";
    }
  }, [bmiResult]);

  useEffect(() => {
    updateAttribute("bmi", debouncedBmi);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedBmi]);

  return (
    <div
      className={`z-10 fixed top-0 left-0 h-screen w-full dark:bg-dark/70 backdrop-blur-md transition duration-300 ease-in-out ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <aside
        className={`h-full max-w-66 bg-primary/80 transition duration-500 ease-in-out ${
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
              id="height"
              name={t("_common:names.inputs.height")}
              value={height}
              type="number"
              label={t("_pages:sidebar.inputs.height.label")}
              onChange={(e) => setHeight(e.target.value)}
              labelClassName="text-light"
            />
            <InputControl
              id="weight"
              name={t("_common:names.inputs.weight")}
              value={weight}
              type="number"
              label={t("_pages:sidebar.inputs.weight.label")}
              onChange={(e) => setWeight(e.target.value)}
              labelClassName="text-light"
            />
            <InputControl
              id="bmi"
              name={t("_common:names.inputs.bmi")}
              value={Number.isNaN(bmi) ? "" : bmi}
              readOnly
              type="number"
              label={t("_pages:sidebar.inputs.bmi.label")}
              onChange={(e) => setBmi(e.target.value)}
              labelClassName="text-light"
              helperText={
                bmiResult.length ? t(`_common:bmiResults.${bmiResult}`) : ""
              }
              helperTextClassName={bmiResultStyle}
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
