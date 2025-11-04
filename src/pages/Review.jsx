import React, { useState } from "react";

export default function Review({ selected, setReview, next, back }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md text-center">
      {/* Hiển thị danh sách món đã chọn */}
     <div className="grid grid-cols-2 gap-4 mb-4">
  {selected && selected.length > 0 ? (
    selected.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-100 flex items-center justify-center rounded-lg">
          <span className="text-sm text-gray-600">{item}</span>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-500 col-span-2">Bạn chưa chọn món nào.</p>
  )}
</div>


      {/* ẢNH CHÈN Ở ĐÂY */}
      <img
        src="/Gemini_Generated_Image_rwa9v6rwa9v6rwa9.png"
        alt="Ẩm thực Đà Nẵng"
        className="w-full max-h-64 object-cover rounded-xl mb-4"
      />

      <h2 className="text-xl font-semibold mb-3">
        Cảm nhận của bạn về món ăn xứ Đà Thành?
      </h2>
      <textarea
        onChange={(e) => setReview(e.target.value)}
        placeholder="Viết vài dòng cảm nhận..."
        className="w-full border p-3 rounded h-32"
      ></textarea>

      <div className="mt-6 flex justify-between">
        <button onClick={back} className="px-4 py-2 rounded-lg border">
          Quay lại
        </button>
        <button
          onClick={next}
          className="px-4 py-2 rounded-lg bg-orange-500 text-white"
        >
          Xem kết quả
        </button>
      </div>
    </div>
  );
}
