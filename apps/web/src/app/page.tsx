import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Hello there!</h1>
      <p>
        This page&apos;s theme is determined by your colorscheme preference.
      </p>
    </div>
  );
}
