import React, { useState } from "react";

export default function ChooseNextTry({ selected, nextTry, setNextTry, next, back }) {
  const [chosen, setChosen] = useState(nextTry || "");

  const handleChoose = (name) => {
    setChosen(name);
    setNextTry(name);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md text-center">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">
        Món nào bạn định sẽ “chén sạch” khi đến Đà Nẵng?
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {selected.map((item) => (
          <div
            key={item.id}
            onClick={() => handleChoose(item.name)}
            className={`cursor-pointer rounded-xl p-3 shadow-md transition-all border-2 ${
              chosen === item.name
                ? "border-orange-500 bg-orange-50"
                : "border-transparent hover:scale-105"
            }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-24 object-cover rounded-lg mb-2"
            />
            <p className="text-sm font-semibold text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>

      {!chosen && (
        <p className="text-blue-600 font-medium mb-4">
          Vui lòng chọn 1 món bạn muốn thử!
        </p>
      )}

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={back}
          className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800"
        >
          Quay lại
        </button>
        <button
          onClick={next}
          disabled={!chosen}
          className={`px-6 py-2 rounded-lg text-white font-semibold ${
            !chosen
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          Tiếp theo
        </button>
      </div>

      <p className="mt-4 text-red-600 font-medium">
        🐼 Chọn món đậm chất Đà Nẵng nhé!
      </p>
    </div>
  );
}
