import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-regular-svg-icons";

function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="h-screen">
      <section className="w-full h-full flex items-center justify-center ">
        <div className="aGrow flex flex-col items-center justify-center gap-10">
          <FontAwesomeIcon icon={faSadCry} className="text-8xl" />
          <h2>{t("_pages:notFound.body")}</h2>
          <Link
            to="/"
            className="filled button primary cursor-pointer"
            name={t("_common:names:buttons.goHome")}
            aria-label={t("_common:.ariaLabels.buttons.goHome")}
          >
            {t("_pages:notFound.goHome")}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
