import { Link } from "react-router-dom";

export const title = "Placeholder";
export const description = "A minimal placeholder project for testing the gallery structure.";

export default function Placeholder() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold text-white">Placeholder</h1>
      <p className="max-w-sm text-neutral-400">
        This is a placeholder project to test the folder and project layout.
      </p>
      <Link
        to="/"
        className="text-sm text-[var(--klaviyo-burnt-sienna)] hover:underline"
      >
        ← Back to gallery
      </Link>
    </div>
  );
}

export const routes = [{ path: "/", Component: () => null }];
