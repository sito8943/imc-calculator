import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useDebounce } from "use-lodash-debounce";
import { stringSimilarity } from "string-similarity-js";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// @sito/ui
import { InputControl } from "@sito/ui";

// @emotion
import { css } from "@emotion/css";

import { food } from "../data/types.json";

function Type() {
  const { t } = useTranslation();

  const { type } = useParams();

  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (e) => setSearchValue(e.target.value);
  const searchValueDebounced = useDebounce(searchValue, 400);

  return (
    <main className="mt-20 p-3 pb-10">
      <section id="header" className="w-full">
        <div className="flex flex-col items-start justify-start gap-5 w-full">
          <h2 className="w-full">{t(`_pages:type.types.${type}`)}</h2>
        </div>
      </section>
      <section id="search" className="mt-2">
        <InputControl
          id="user"
          name={t("_common:names.inputs.search")}
          value={searchValue}
          placeholder={t("_pages:type.search.placeholder")}
          leftComponent={<FontAwesomeIcon icon={faSearch} />}
          onChange={handleSearchValue}
        />
      </section>
      <section id="main" className="w-full mt-5">
        <ul className="grid grid-cols-3 gap-3">
          {food
            .filter((food) =>
              searchValueDebounced.length
                ? food?.name?.indexOf(searchValueDebounced) >= 0 ||
                  stringSimilarity(searchValueDebounced, food?.name) > 0.35
                : true
            )
            ?.map((food, i) => (
              <li
                className={`aGrow ${css({
                  animationDelay: `${i * 50}ms`,
                })} rounded-md filled primary transition hover:scale-105 ease-in-out duration-300`}
                key={i}
              >
                <button className="w-full h-full items-center justify-center p-3 ">
                  {food.name}
                </button>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Type;
