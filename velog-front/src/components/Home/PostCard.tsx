export default function PostCard({ post }: any) {
  return (
    <div className="rounded-2xl shadow-lg bg-white/90 border border-gray-100 flex flex-col overflow-hidden hover:scale-[1.03] transition">
      <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover" />
      <div className="flex-1 flex flex-col p-4 gap-2">
        <div className="text-xs text-blue-400 font-semibold">{post.category}</div>
        <div className="text-lg font-bold mb-1">{post.title}</div>
        <div className="text-gray-500 text-sm line-clamp-2">{post.summary}</div>
        <div className="mt-auto flex justify-between text-xs text-gray-400">
          <span>{post.author}</span>
          <span>{post.createdAt}</span>
        </div>
      </div>
    </div>
  );
}
