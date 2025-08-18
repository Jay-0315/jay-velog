'use client';

import Navbar from '@/components/Home/Navbar';
import NoticeBanner from '@/components/Home/NoticeBanner';
import CategoryTabs from '@/components/Home/CategoryTabs';
import SearchBar from '@/components/Home/SearchBar';
import PostCard from '@/components/Home/PostCard';

// 더미 게시글 데이터
const dummyPosts = [
  {
    id: 1,
    title: 'Next.js로 포트폴리오 블로그 만들기',
    summary: 'Next.js와 Spring Boot를 활용한 감각적 블로그 프로젝트 설계 및 구현 방법!',
    thumbnail: '/images/thumb1.jpg',
    category: '개발',
    author: 'jay',
    createdAt: '2025-08-07',
  },
  // ...더미 데이터 추가
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-sunshine-sky flex flex-col items-center">
      {/* 상단 네비게이션 */}
      <Navbar />

      {/* 공지/배너 */}
      <NoticeBanner />

      {/* 카테고리 탭, 검색 */}
      <div className="w-full max-w-5xl mx-auto px-2 mt-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <CategoryTabs />
          <SearchBar />
        </div>

        {/* 게시글 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-4">
          {dummyPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

             <footer className="w-full border-t border-[#d9d5c6] py-3 px-8 text-xs text-gray-500 flex flex-wrap gap-6 justify-center">
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">Status</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Careers</a>
        <a href="#" className="hover:underline">Press</a>
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Text to speech</a>
      </footer>
      </div>
    </div>
  );
}
