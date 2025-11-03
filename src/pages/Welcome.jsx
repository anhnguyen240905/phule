export default function Welcome({ next }){
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
      <h1 className="text-3xl font-bold text-blue-700">Thực Khách Đậm Đà</h1>
      <p className="mt-4 text-gray-600">Hành trình ẩm thực Đà Thành — khám phá, chọn món và tạo thiệp cá nhân.</p>
      <button onClick={next} className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full">Bắt đầu khám phá →</button>
    </div>
  );
}
