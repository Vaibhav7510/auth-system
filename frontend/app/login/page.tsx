'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden px-4">

      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl"></div>
      <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">

        {/* Header */}
        <div className="px-8 pt-10 pb-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Sign in
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Access your workspace securely
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 pb-8">

          {/* Email */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-white/70">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition
                         focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/30"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-white/70">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition
                         focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/30"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="group relative w-full overflow-hidden rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition
                       hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
          >
            <span className="relative z-10">Sign in</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-0 transition group-hover:opacity-20"></div>
          </button>
        </form>

        {/* Footer */}
        <div className="px-8 pb-8 text-center">
          <p className="text-sm text-white/60">
            Don&apos;t have an account?{' '}
            <Link
              href="/register"
              className="font-medium text-indigo-400 hover:text-indigo-300 transition"
            >
              Create one
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
