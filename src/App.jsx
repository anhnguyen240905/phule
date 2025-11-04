import React, { useState } from "react";
import Welcome from "./pages/Welcome.jsx";
import SelectFoods from "./pages/SelectFoods.jsx";
import ChooseFavorite from "./pages/ChooseFavorite.jsx";
import ChooseNextTry from "./pages/ChooseNextTry.jsx";
import Review from "./pages/Review.jsx";
import Result from "./pages/Result.jsx";

export default function App() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [nextTry, setNextTry] = useState("");
  const [review, setReview] = useState("");

const foods = [
    { id: 1, name: "Mì Quảng", img: "/Gemini_Generated_Image_rwa9v6rwa9v6rwa9.png", desc: "Sợi mì vàng óng, nước dùng đậm đà, đặc sản miền Trung." },
    { id: 2, name: "Bánh tráng trộn", img: "/an-toan-nuoc-1.png", desc: "Món ăn vặt được yêu thích với vị chua cay mặn ngọt hài hòa." },
    { id: 3, name: "Cao lầu", img: "/an-toan-nuoc-2.png", desc: "Món ăn nổi tiếng của Hội An, sợi mì dai và thịt xá xíu thơm." },
    { id: 4, name: "Chè bưởi", img: "/an-toan-nuoc-1.png", desc: "Món tráng miệng ngọt thanh, giải nhiệt tuyệt vời." },
  ];
  
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
            next={() => setStep(3)}
            back={() => setStep(1)}
          />
        )}

        {step === 3 && (
  <ChooseNextTry
    foods={foods}       // thêm dòng này
    selected={selected}
    favorite={favorite}
    nextTry={nextTry}
    setNextTry={setNextTry}
    next={() => setStep(4)}
    back={() => setStep(2)}
  />
)}

        {step === 4 && (
          <Review
            selected={selected}
            setReview={setReview}
            next={() => setStep(5)}
            back={() => setStep(3)}
          />
        )}

        {step === 5 && (
          <Result
            selected={selected}
            favorite={favorite}
            nextTry={nextTry}
            review={review}
            restart={() => {
              setSelected([]);
              setFavorite("");
              setNextTry("");
              setReview("");
              setStep(0);
            }}
          />
        )}
      </div>
    </div>
  );
}
