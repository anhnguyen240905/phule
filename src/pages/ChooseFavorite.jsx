import React from "react";

export default function ChooseFavorite({ selected, favorite, setFavorite, next, back }) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-md text-center">
      <h2 className="text-2xl font-bold mb-6">Đâu là “món ruột” của bạn?</h2>

      {/* Hiển thị danh sách món đã chọn */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {selected.map((s) => (
          <button
            key={s.id}
            onClick={() => setFavorite(s.name)}
            className={`px-4 py-2 rounded-full border transition ${
              favorite === s.name
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300 hover:border-orange-400"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Nút điều hướng */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={back}
          className="px-5 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
        >
          Quay lại
        </button>
        <button
          onClick={next}
          disabled={!favorite}
          className={`px-6 py-2 rounded-lg text-white font-semibold ${
            favorite
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Tiếp theo
        </button>
      </div>
    </div>
  );
}
