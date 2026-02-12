import { Link } from "react-router-dom";

export const title = "Button";
export const description = "Button component exploration for the design system.";

export default function ButtonDemo() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-2xl font-semibold text-white">Button</h1>
      <p className="max-w-sm text-neutral-400">
        Placeholder for a button component showcase.
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
