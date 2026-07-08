'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-iwt-bg text-iwt-dark antialiased">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold text-iwt-navy mb-3">Something went wrong</h1>
          <p className="text-gray-600 mb-6 max-w-md">
            The Salvation Army IWT site ran into an unexpected error.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="bg-iwt-red text-white font-bold px-6 py-3 rounded-xl hover:bg-iwt-red/90 transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
