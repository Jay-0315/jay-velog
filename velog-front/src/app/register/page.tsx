'use client';

import { useState } from 'react';
import { FiUser, FiLock, FiMail} from "react-icons/fi";
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({
      username: '',
      email: '',
      nickname: '',
      password: '',
      confirmPassword: ''
    });
   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({...form,[e.target.name]: e.target.value});
      setError('');
      setSuccess('');
    };

    const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
      if (form.password !== form.confirmPassword) {
        setError('비밀번호가 일치하지 않습니다.');
        return;
      }
    // TODO: 서버 연동 & 조건 검사
      setLoading(true);
      setError('');
      setSuccess('');
      setTimeout(() => {
      setLoading(false);
      setSuccess('회원가입이 완료되었습니다!');
      setTimeout(() => {
      setSuccess('');
      router.push('/');
    }, 1200); // 1.2초 후 이동
  }, 1000);   // (여긴 실제 서버 통신 완료 후로 바꿔도 됨)
};
    const handleGotoLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
  };


    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sunshine-sky">
      <div className="w-full max-w-md mx-auto rounded-3xl shadow-2xl bg-white/80 backdrop-blur-xl border border-white/40 px-8 py-10 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-center mb-2">회원가입</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
            <input
              type="text"
              name="username"
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-white/70 focus:border-blue-400 outline-none text-gray-700 placeholder-gray-400 transition"
              placeholder="아이디"
              value={form.username}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </div>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
            <input
              type="email"
              name="email"
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-white/70 focus:border-blue-400 outline-none text-gray-700 placeholder-gray-400 transition"
              placeholder="이메일"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
            <input
              type="text"
              name="nickname"
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-white/70 focus:border-blue-400 outline-none text-gray-700 placeholder-gray-400 transition"
              placeholder="닉네임"
              value={form.nickname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
            <input
              type="password"
              name="password"
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-white/70 focus:border-blue-400 outline-none text-gray-700 placeholder-gray-400 transition"
              placeholder="비밀번호"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </div>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 bg-white/70 focus:border-blue-400 outline-none text-gray-700 placeholder-gray-400 transition"
              placeholder="비밀번호 확인"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="py-3 rounded-xl font-bold bg-blue-500 hover:bg-blue-600 text-white transition shadow-lg"
            disabled={loading}
          >
            {loading ? "가입 중..." : "회원가입"}
          </button>
          {error && <div className="text-red-500 text-center text-sm">{error}</div>}
          {success && <div className="text-green-600 text-center text-sm">{success}</div>}
        </form>
        <div className="text-center mt-2">
         <a
            className="text-blue-500 hover:underline text-sm"
            onClick={handleGotoLogin}
          >
            이미 계정이 있으신가요? 로그인
          </a>
        </div>
      </div>
    </div>
  );
}





  