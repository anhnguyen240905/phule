import React, { useState } from "react";

export default function SelectFoods({ next = () => {}, saveSelection = () => {} }) {
  // Danh sách món ăn (bạn có thể chỉnh lại tùy ý)
  const foods = [
    { id: 1, name: "Mì Quảng", img: "/Gemini_Generated_Image_rwa9v6rwa9v6rwa9.png", desc: "Sợi mì vàng óng, nước dùng đậm đà, đặc sản miền Trung." },
    { id: 2, name: "Bánh tráng trộn", img: "/an-toan-nuoc-1.png", desc: "Món ăn vặt được yêu thích với vị chua cay mặn ngọt hài hòa." },
    { id: 3, name: "Cao lầu", img: "/an-toan-nuoc-2.png", desc: "Món ăn nổi tiếng của Hội An, sợi mì dai và thịt xá xíu thơm." },
    { id: 4, name: "Chè bưởi", img: "/an-toan-nuoc-1.png", desc: "Món tráng miệng ngọt thanh, giải nhiệt tuyệt vời." },
  ];
  const [selected, setSelected] = useState([]);
  const toggleFood = (id) => {
  setSelected((prev) =>
    prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
  );
};

  const handleNext = () => {
    // --- LOG để debug ---
    console.log("SelectFood.handleNext called");
    console.log("props.saveSelection typeof:", typeof saveSelection);
    console.log("props.next typeof:", typeof next);
    console.log("selected ids:", selected);

    const selectedFoods = foods.filter((f) => selected.includes(f.id));

    // bảo vệ trước khi gọi
    if (typeof saveSelection === "function") {
      try {
        saveSelection(selectedFoods);
      } catch (e) {
        console.error("saveSelection threw:", e);
      }
    } else {
      console.warn("saveSelection is not a function — skipping saveSelection()");
    }

    if (typeof next === "function") {
      try {
        next();
      } catch (e) {
        console.error("next() threw:", e);
      }
    } else {
      console.warn("next is not a function — cannot navigate");
    }
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Chọn món bạn muốn thử</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div
            key={food.id}
            onClick={() => toggleFood(food.id)}
            className={`cursor-pointer rounded-2xl shadow-lg overflow-hidden border-4 transition-all ${
              selected.includes(food.id)
                ? "border-orange-500 scale-105"
                : "border-transparent hover:scale-105"
            }`}
          >
            <img src={food.img} alt={food.name} className="w-full h-48 object-cover" />
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-gray-800">{food.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{food.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={selected.length === 0}
        className={`mt-8 px-8 py-3 rounded-full text-white font-semibold ${
          selected.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        Tiếp tục ({selected.length})
      </button>
    </div>
  );
}

