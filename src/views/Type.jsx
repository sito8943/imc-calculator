import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { types } from "../data/types.json";

function Type() {
  const { t } = useTranslation();

  const { type } = useParams();

  return (
    <main className="mt-20 p-3 pb-10">
      <section id="header" className="w-full">
        <div className="flex flex-col items-start justify-start gap-5 w-full max-w-75">
          <h2 className="w-full">{t(`_pages:type.types.${type}`)}</h2>
        </div>
      </section>
      <section id="main" className="w-full mt-5">
        <ul className="grid grid-cols-3 gap-3">
          {types[type]?.map((food, i) => (
            <li
              className={`aGrow rounded-md filled primary transition hover:scale-105 ease-in-out duration-300`}
              key={i}
            >
              <button className="w-full h-full items-center justify-center p-3 ">
                {food.text}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Type;
