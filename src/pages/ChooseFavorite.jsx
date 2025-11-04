import React from "react";
export default function ChooseFavorite({ selected, setFavorite, setNextTry, next, back }){
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-3">Đâu là “món ruột” của bạn?</h2>
      <div className="flex gap-3 flex-wrap">
        {selected.length === 0 ? (
  <p className="text-gray-500">Bạn chưa chọn món ở bước trước.</p>
) : (
  selected.map((s) => (
    <button
      key={s.id}
      onClick={() => setFavorite(s.name)}
      className="px-3 py-2 border rounded-lg"
    >
      {s.name}
    </button>
  ))
)}
      </div>
      <div className="mt-4">
        <label className="block text-gray-700">Món bạn muốn thử tiếp theo</label>
        <input onChange={(e)=>setNextTry(e.target.value)} className="mt-2 border p-2 rounded w-full" placeholder="Nhập tên món..." />
      </div>
      <div className="mt-6 flex justify-between">
        <button onClick={back} className="px-4 py-2 rounded-lg border">Quay lại</button>
        <button onClick={next} className="px-4 py-2 rounded-lg bg-orange-500 text-white">Tiếp theo</button>
      </div>
    </div>
  );
}
