import React, { useState } from "react";
import Welcome from "./pages/Welcome.jsx";
import SelectFoods from "./pages/SelectFoods.jsx";
import ChooseFavorite from "./pages/ChooseFavorite.jsx";
import Review from "./pages/Review.jsx";
import Result from "./pages/Result.jsx";

export default function App(){
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [nextTry, setNextTry] = useState("");
  const [review, setReview] = useState("");
  const saveSelection = (foods) => {
    setSelected(foods);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {step === 0 && <Welcome next={() => setStep(1)} />}
        {step === 1 && (
  <SelectFoods
    selected={selected}
    setSelected={setSelected}
    saveSelection={(foods) => setSelected(foods)}
    next={() => setStep(2)}
  />
)}
       {step === 2 && (
  <ChooseFavorite
    selected={selected}
    favorite={favorite}
    setFavorite={setFavorite}
    setNextTry={setNextTry}
    next={() => setStep(3)}
    back={() => setStep(1)}
  />
)}
        {step === 3 && (
  <Review
    selected={selected}
    setReview={setReview}
    next={() => setStep(4)}
    back={() => setStep(2)}
  />
)}
        {step === 4 && <Result selected={selected} favorite={favorite} nextTry={nextTry} review={review} restart={() => {
          setSelected([]); setFavorite(""); setNextTry(""); setReview(""); setStep(0);
        }}/>}
      </div>
    </div>
  );
}
