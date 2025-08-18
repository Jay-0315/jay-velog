const categories = [
  "전체",
  "프론트엔드",
  "데이터베이스",
  "백엔드",
  "아카이브",
  "|",         // 구분선
];

export default function CategoryTabs() {
  return (
    <nav className="flex items-center gap-8 px-4 py-3 w-full">
      {categories.map((cat, idx) =>
        cat === "|" ? (
          <span key={idx} className="h-5 border-r border-gray-300 mx-2" />
        ) : (
          <button
            key={cat}
            className="text-gray-400 hover:text-gray-900 text-base font-medium transition px-2 py-1 bg-transparent"
            style={{ fontFamily: "inherit" }} // 상속된 폰트 유지, 선택
            // 추후 onClick 등 상태처리 추가 가능
          >
            {cat}
          </button>
        )
      )}
    </nav>
  );
}
