import React from "react";

export default function ChooseNextTry({
  foods,
  selected,
  favorite,
  nextTry,
  setNextTry,
  next,
  back,
}) {
  // Lấy danh sách các món KHÔNG được chọn ở SelectFoods
  const remainingFoods = foods.filter(
    (f) => !selected.some((s) => s.name === f.name)
  );

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-3">
        Món bạn muốn thử tiếp theo là gì?
      </h2>

      <div className="flex gap-3 flex-wrap">
        {remainingFoods.length === 0 ? (
          <p className="text-gray-500">Bạn đã chọn hết các món rồi!</p>
        ) : (
          remainingFoods.map((f) => (
            <button
              key={f.id}
              onClick={() => setNextTry(f.name)}
              className={`px-3 py-2 border rounded-lg ${
                nextTry === f.name
                  ? "bg-orange-500 text-white"
                  : "hover:bg-orange-100"
              }`}
            >
              {f.name}
            </button>
          ))
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={back} className="px-4 py-2 rounded-lg border">
          Quay lại
        </button>
        <button
          onClick={next}
          disabled={!nextTry}
          className={`px-4 py-2 rounded-lg ${
            nextTry
              ? "bg-orange-500 text-white"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
}
