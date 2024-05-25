import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// components
import { LPieChart } from "../components/PieChart";

function Home() {
  const { t } = useTranslation();

  const userName = "Sito";

  return (
    <main className="mt-20 p-3 pb-10">
      <section id="pie-chart" className="w-full">
        <div className="flex flex-col items-start justify-start gap-5 w-full">
          <h2 className="text-3xl sm:text-xl">
            {t("_pages:home.welcome")} {userName}
          </h2>
          <div className="w-full max-w-75 h-66 m-auto mb-5">
            <LPieChart
              data={[
                { title: "One", value: 10, color: "#FFC745" },
                { title: "Two", value: 15, color: "#C0C1FB" },
                { title: "Three", value: 20, color: "#FEB1C0" },
              ]}
            />
          </div>
        </div>
      </section>
      <section id="food" className="mt-10 w-full">
        <div className="m-auto flex flex-col gap-5 items-center justify-start w-full m-w-60">
          <Link
            to="/types/breakfast"
            className="w-full filled primary button cursor-pointer"
          >
            {t("_pages:home.types.breakfast")}
          </Link>

          <Link
            to="/types/lunch"
            className="w-full filled primary button cursor-pointer"
          >
            {t("_pages:home.types.lunch")}
          </Link>

          <Link
            to="/types/dinner"
            className="w-full filled primary button cursor-pointer"
          >
            {t("_pages:home.types.dinner")}
          </Link>

          <Link
            to="/types/snaps"
            className="w-full filled primary button cursor-pointer"
          >
            {t("_pages:home.types.snaps")}
          </Link>
          <Link
            to="/more-info"
            className="w-full outlined primary button cursor-pointer"
          >
            {t("_pages:home.moreInfo")}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
