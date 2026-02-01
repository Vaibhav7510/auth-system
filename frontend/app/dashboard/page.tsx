'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-white/10 px-8 py-4">
        <h1 className="text-xl font-semibold tracking-tight">
          Dashboard
        </h1>

        <Link
          href="/login"
          className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20"
        >
          Logout
        </Link>
      </header>

      {/* Main Content */}
      <main className="px-8 py-10">

        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            Welcome back 👋
          </h2>
          <p className="mt-1 text-sm text-white/60">
            This is your secure workspace.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
            <h3 className="text-lg font-medium">
              Authentication
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Login and register flows are ready.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
            <h3 className="text-lg font-medium">
              Security
            </h3>
            <p className="mt-2 text-sm text-white/60">
              JWT-based auth will be connected next.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
            <h3 className="text-lg font-medium">
              Next Step
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Backend integration with NestJS & PostgreSQL.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
