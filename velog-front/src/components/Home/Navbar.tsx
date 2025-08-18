export default function Navbar() {
  return (
 <nav className="w-full flex items-center justify-between px-10 h-16 border-b border-[#d9d5c6] sticky top-0 z-40">
        <div className="text-2xl font-serif font-black tracking-tight">Jay Velog</div>
        <div className="flex gap-6 items-center text-base font-medium">
          <a href="#" className="hover:underline">Our story</a>
          <a href="#" className="hover:underline">Write</a>
          <a href="#" className="hover:underline">Sign in</a>
          <button className="rounded-full px-5 py-2 bg-black text-white font-semibold">Get started</button>
        </div>
    </nav>
  );
}
