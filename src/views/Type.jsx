import { useEffect, useMemo, useState } from "react";
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
import Modal from "../components/Modal";

function Type() {
  const { t } = useTranslation();

  const { type } = useParams();

  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (e) => setSearchValue(e.target.value);
  const searchValueDebounced = useDebounce(searchValue, 400);

  const [modalFood, setModalFood] = useState();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setModalFood();
  };

  useEffect(() => {
    if (modalFood) setShowModal(true);
    else setShowModal(false);
  }, [modalFood]);

  const modalTitle = useMemo(() => {
    if (modalFood) {
      const { type } = modalFood;
      switch (type) {
        case "eat":
          return t("_pages:type.modal.eat", { food: modalFood.plural });
      }
    }
  }, [modalFood, t]);

  const [counter, setCounter] = useState(1);

  return (
    <main className="mt-20 p-3 pb-10">
      <Modal title={modalTitle} open={showModal} handleClose={handleCloseModal}>
        <InputControl
          id="country "
          name={t("_common:names.inputs.counter")}
          label={t(`_common:types.${modalFood?.type}`)}
          labelClassName="text-light"
          value={counter}
          type="number"
          onChange={(e) => setCounter(e.target.value)}
        />
      </Modal>
      <section id="header" className="w-full">
        <div className="flex flex-col items-start justify-start gap-5 w-full">
          <h2 className="w-full">{t(`_pages:type.types.${type}`)}</h2>
        </div>
      </section>
      <section id="search" className="mt-2">
        <InputControl
          id="search"
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
                <button
                  onClick={() => setModalFood(food)}
                  className="w-full h-full items-center justify-center p-3 "
                >
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
