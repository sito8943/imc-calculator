import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// components
import { LPieChart } from "../components/PieChart";

// providers
import { useAccount } from "../providers/AccountProvider";

function Home() {
  const { t } = useTranslation();

  const { account } = useAccount();

  return (
    <main className="w-[95%] mx-auto mt-20 pt-3 pb-10">
      <section id="pie-chart" className="w-full">
        <div className="flex flex-col items-start justify-start gap-5 w-full">
          <h2 className="text-primary text-3xl sm:text-xl">
            {t("_pages:home.welcome")} {account?.user?.userName ?? t("_common:noName")}
          </h2>
          {account?.user?.calories ||
          account?.user?.proteins ||
          account?.user?.lib ||
          account?.user?.lib ? (
            <div className="w-full max-w-75 h-66 m-auto mb-5">
              <LPieChart
                data={[
                  {
                    title: t("_pages:home.points.calories"),
                    value: account?.user?.calories ?? 0,
                    color: "#FFC745",
                  },
                  {
                    title: t("_pages:home.points.proteins"),
                    value: account?.user?.proteins ?? 0,
                    color: "#C0C1FB",
                  },
                  {
                    title: t("_pages:home.points.lipids"),
                    value: account?.user?.lib ?? 0,
                    color: "#FEB1C0",
                  },
                  {
                    title: t("_pages:home.points.carbohydrates"),
                    value: account?.user?.lib ?? 0,
                    color: "#FEB1C0",
                  },
                ]}
              />
            </div>
          ) : (
            <p>{t("_pages:home.noData")}</p>
          )}
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
            className="w-full outlined primary button cursor-pointer dark:!text-light"
          >
            {t("_pages:home.moreInfo")}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
