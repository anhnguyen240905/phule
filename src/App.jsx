import React, { useState } from "react";
import Welcome from "./pages/Welcome";
import SelectFoods from "./pages/SelectFoods";
import ChooseFavorite from "./pages/ChooseFavorite";
import Review from "./pages/Review";
import Result from "./pages/Result";

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
