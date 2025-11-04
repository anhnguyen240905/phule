npm install html2canvas
import React, { useRef } from "react";
import html2canvas from "html2canvas";

export default function Result({ selected, favorite, nextTry, review, restart }) {
  const resultRef = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(resultRef.current, { scale: 2 });
    const link = document.createElement("a");
    link.download = "thiep-am-thuc.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div ref={resultRef} className="bg-gradient-to-br from-cyan-50 to-yellow-50 rounded-2xl p-6 shadow-lg text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-3">Thực khách Đậm Đà</h2>
      <p>Mình đã “chén sạch” <b>{selected.length}</b> món!</p>
      <p>Món ruột: <b>{favorite || "Chưa chọn"}</b></p>
      <p>Món tiếp theo muốn thử: <b>{nextTry || "Chưa nhập"}</b></p>
      <blockquote className="mt-4 italic">“{review || "Bạn chưa viết cảm nhận"}”</blockquote>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={restart}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Thử lại
        </button>
        <button
          onClick={handleDownload}
          className="px-4 py-2 rounded-lg border"
        >
          Tải thiệp
        </button>
      </div>
    </div>
  );
}
