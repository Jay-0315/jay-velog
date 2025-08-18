// src/app/page.tsx
'use client';
import IntroModal from '@/components/Common/IntroModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function IntroPage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleGuest = () => {
    router.push('/home');
  };

  return (
<div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-silver-sky transition-colors duration-1000">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="sunshine-beam"></div>
        <h1 className="text-6xl font-bold text-black mb-8">Jay Velog</h1>
        <p className="text-xl font-normal mb-8 text-black/90">제이의 개발 블로그</p>
        <div className="flex gap-4">
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
            onClick={() => setShowModal(true)}
          >
            로그인
          </button>
          <button
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl shadow hover:bg-gray-300 transition"
            onClick={handleGuest}
          >
            게스트로 둘러보기
          </button>
        </div>

        {showModal && (
          <IntroModal onClose={() => setShowModal(false)} />
        )}
      </div>
    </div>
    
  );
}
