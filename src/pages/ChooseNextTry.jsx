import React from "react";

export default function ChooseNextTry({ selected, favorite, nextTry, setNextTry, next, back }) {
  // lọc ra các món còn lại
  const remainingFoods = selected.filter((food) => food !== favorite);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">
        Món nào bạn sẽ muốn thử tiếp theo?
      </h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {remainingFoods.map((food) => (
          <button
            key={food}
            onClick={() => setNextTry(food)}
            className={`p-3 border rounded-xl transition ${
              nextTry === food ? "bg-blue-500 text-white" : "bg-white hover:bg-blue-100"
            }`}
          >
            {food}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={back}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
        >
          Quay lại
        </button>

        <button
          onClick={next}
          disabled={!nextTry}
          className={`px-4 py-2 rounded-lg ${
            nextTry ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-400"
          }`}
        >
          Tiếp theo
        </button>
      </div>
    </div>
  );
}
