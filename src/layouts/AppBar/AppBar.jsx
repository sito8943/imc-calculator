import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

// image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// images
import noUser from "../../assets/user-no-image.webp";

function AppBar(props) {
  const { t } = useTranslation();
  const { openMenu } = props;

  const location = useLocation();

  return (
    <header className="z-10 w-[95%] h-15 rounded-md backdrop-blur-xl bg-primary/50 fixed top-3 left-[50%] -translate-x-[50%]">
      <div className="flex items-center justify-between h-full w-full px-3 gap-3">
        <div className="flex items-center justify-start gap-3">
          {location.pathname != "/" && (
            <Link
              name={t("_common:names.buttons.back")}
              aria-label={t("_common:ariaLabels.buttons.back")}
              to="/"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
          )}
          <h1 className="font-bold text-4xl sm:text-xl text-plight logo">
            EatSmart
          </h1>
        </div>
        <button
          name={t("_common:names.buttons.userMenu")}
          aria-label={t("_common:ariaLabels.buttons.userMenu")}
          onClick={openMenu}
        >
          <img className="w-10 rounded-full" src={noUser} alt="user-image" />
        </button>
      </div>
    </header>
  );
}

AppBar.propTypes = {
  openMenu: PropTypes.func,
};

export default AppBar;
