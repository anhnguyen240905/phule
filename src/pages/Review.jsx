export default function Review({ setReview, next, back }){
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-3">Cảm nhận của bạn về món ăn xứ Đà Thành?</h2>
      <textarea onChange={(e)=>setReview(e.target.value)} placeholder="Viết vài dòng cảm nhận..." className="w-full border p-3 rounded h-32"></textarea>
      <div className="mt-6 flex justify-between">
        <button onClick={back} className="px-4 py-2 rounded-lg border">Quay lại</button>
        <button onClick={next} className="px-4 py-2 rounded-lg bg-orange-500 text-white">Xem kết quả</button>
      </div>
    </div>
  );
}
