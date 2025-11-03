export default function Welcome({ next }) {
  return (
    <div
      className="rounded-2xl p-8 shadow-xl text-center text-white"
      style={{
        backgroundImage: "url('public/TỜ HDSD-02.jpg')", // ← CHÈN ẢNH Ở ĐÂY
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold drop-shadow-lg">Thực Khách Đậm Đà</h1>
      <p className="mt-4 text-lg drop-shadow">
        Hành trình ẩm thực Đà Thành — khám phá, chọn món và tạo thiệp cá nhân.
      </p>
      <button
        onClick={next}
        className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
      >
        Bắt đầu khám phá →
      </button>
    </div>
  );
}
