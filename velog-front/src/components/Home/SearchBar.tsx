export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="검색어를 입력하세요"
      className="px-5 py-2 rounded-xl border border-gray-200 bg-white/70 text-gray-700 shadow focus:border-blue-400 outline-none w-60 transition"
    />
  );
}
