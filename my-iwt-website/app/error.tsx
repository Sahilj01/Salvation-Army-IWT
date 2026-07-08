'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-bold text-iwt-navy mb-3">Something went wrong</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        We hit a snag loading this page. Please try again.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="bg-iwt-red text-white font-bold px-6 py-3 rounded-xl hover:bg-iwt-red/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
