'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function DashboardPage() {
  const { token, logout } = useAuth();
  const router = useRouter();

  // 🔐 Route protection
  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);

  if (!token) {
    return null; // prevents flicker
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-white/10 px-8 py-4">
        <h1 className="text-xl font-semibold tracking-tight">
          Dashboard
        </h1>

        <button
          onClick={logout}
          className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20"
        >
          Logout
        </button>
      </header>

      {/* Content */}
      <main className="px-8 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-lg font-medium">Protected Page</h2>
            <p className="mt-2 text-sm text-white/60">
              You can only see this when logged in.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-lg font-medium">Session</h2>
            <p className="mt-2 text-sm text-white/60">
              Auth token is stored securely.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-lg font-medium">Next</h2>
            <p className="mt-2 text-sm text-white/60">
              Connect NestJS backend & real JWT.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
