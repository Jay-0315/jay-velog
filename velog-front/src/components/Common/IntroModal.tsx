'use client';

import { useState } from 'react';
import { FiUser, FiLock, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroModal({ onClose }: { onClose: () => void }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      setError('아이디 또는 비밀번호를 확인해주세요.');
    }, 1200);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl px-10 py-8 min-w-[340px] flex flex-col gap-6 border border-white/40"
          initial={{ scale: 0.93, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 330, damping: 28 }}
          onClick={e => e.stopPropagation()}
        >
          {/* 닫기버튼 */}
          <button
            className="absolute top-5 right-5 text-gray-400 hover:text-black text-2xl"
            onClick={onClose}
          >
            <FiX />
          </button>
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-2 tracking-tight">로그인</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
              <input
                className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-white/80 focus:border-blue-400 outline-none text-gray-700 placeholder-gray-400 transition"
                type="text"
                placeholder="아이디"
                value={id}
                onChange={e => setId(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
              <input
                className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-white/80 focus:border-blue-400 outline-none text-gray-700 placeholder-gray-400 transition"
                type="password"
                placeholder="비밀번호"
                value={pw}
                onChange={e => setPw(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 py-3 rounded-xl font-bold bg-blue-500 hover:bg-blue-600 text-white transition shadow-lg"
              disabled={loading}
            >
              {loading ? "로그인 중..." : "로그인"}
            </button>
            {error && (
              <div className="text-red-500 text-center text-sm">{error}</div>
            )}
            <div className="text-center mt-2">
              <a href="/register" className="text-blue-500 hover:underline text-sm">
                아직 회원이 아니신가요?
              </a>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
