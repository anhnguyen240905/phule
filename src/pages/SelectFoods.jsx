import React, { useState } from "react";
export default function SelectFood({ next, saveSelection }) {
  // Danh sách món ăn (bạn có thể chỉnh lại tùy ý)
  const foods = [
    {
      id: 1,
      name: "Mì Quảng",
      img: "/Gemini_Generated_Image_rwa9v6rwa9v6rwa9.png", // ← CHÈN ẢNH Ở ĐÂY
      desc: "Sợi mì vàng óng, nước dùng đậm đà, đặc sản miền Trung.",
    },
    {
      id: 2,
      name: "Bánh tráng trộn",
      img: "/an-toan-nuoc-1.png", // ← CHÈN ẢNH Ở ĐÂY
      desc: "Món ăn vặt được yêu thích với vị chua cay mặn ngọt hài hòa.",
    },
    {
      id: 3,
      name: "Cao lầu",
      img: "/an-toan-nuoc-2.png", // ← CHÈN ẢNH Ở ĐÂY
      desc: "Món ăn nổi tiếng của Hội An, sợi mì dai và thịt xá xíu thơm.",
    },
    {
      id: 4,
      name: "Chè bưởi",
      img: "/an-toan-nuoc-1.png", // ← CHÈN ẢNH Ở ĐÂY
      desc: "Món tráng miệng ngọt thanh, giải nhiệt tuyệt vời.",
    },
  ];

  const [selected, setSelected] = useState([]);

  // Toggle chọn món
  const toggleFood = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    const selectedFoods = foods.filter((f) => selected.includes(f.id));
    saveSelection(selectedFoods); // lưu để hiển thị ở trang sau
    next();
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Chọn món bạn muốn thử</h2>

      {/* Lưới hiển thị món ăn */}
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
            <img
              src={food.img} // ← ẢNH HIỂN THỊ Ở ĐÂY
              alt={food.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-gray-800">{food.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{food.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nút tiếp tục */}
      <button
        onClick={handleNext}
        disabled={selected.length === 0}
        className={`mt-8 px-8 py-3 rounded-full text-white font-semibold ${
          selected.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        Tiếp tục ({selected.length})
      </button>
    </div>
  );
}
