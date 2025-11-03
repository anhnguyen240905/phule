import { foods } from "../data";

export default function SelectFoods({ selected, setSelected, next }){
  const toggle = (item) => {
    setSelected(prev => prev.includes(item) ? prev.filter(x=>x!==item) : [...prev, item]);
  };
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Bạn đã ăn qua bao nhiêu món “Đậm Đà” dưới đây?</h2>
      <div className="grid grid-cols-3 gap-3">
        {foods.map(f => (
          <button key={f} onClick={() => toggle(f)} className={`p-3 rounded-xl border text-left ${selected.includes(f) ? "bg-amber-200 border-amber-400" : "bg-white"}`}>
            {f}
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <button onClick={next} className="bg-orange-500 text-white px-4 py-2 rounded-lg">Tiếp theo</button>
      </div>
    </div>
  );
}
