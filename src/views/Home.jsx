import { useTranslation } from "react-i18next";
import { LPieChart } from "../components/PieChart";

function Home() {
  const { t } = useTranslation();

  const userName = "Sito";

  return (
    <main className="mt-20 p-3">
      <section
        id="pie-chart"
        className="flex flex-col items-start justify-start gap-5"
      >
        <h2>
          {t("_pages:home.welcome")} {userName}
        </h2>
        <div className="w-60 h-60">
          <LPieChart
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
          />
        </div>
      </section>{" "}
      <section id="food"></section>
    </main>
  );
}

export default Home;
