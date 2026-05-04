import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-black gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
        <p className="text-text-mid mb-8 max-w-sm mx-auto">
          This screen seems to be offline. Let's get you back to the dashboard.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-indigo to-brand-cyan shadow-cta"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
