import React, { useState } from "react";
import ChooseFavorite from "./ChooseFavorite";
import SelectFood from "./SelectFood";
import Review from "./Review";
import Result from "./Result";

export default function App() {
  const [step, setStep] = useState(1);

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const [selected, setSelected] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [nextTry, setNextTry] = useState("");

  return (
    <div className="p-8">
      {step === 1 && <SelectFood next={next} saveSelection={setSelected} />}
      {step === 2 && (
        <ChooseFavorite
          selected={selected.map((s) => s.name)} // hoặc s nếu chỉ là string
          setFavorite={setFavorite}
          setNextTry={setNextTry}
          next={next}
          back={back}
        />
      )}
      {step === 3 && (
        <Review
          selected={selected}
          favorite={favorite}
          nextTry={nextTry}
          next={next}
          back={back}
        />
      )}
      {step === 4 && <Result selected={selected} />}
    </div>
  );
}
