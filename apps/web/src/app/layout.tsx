import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Notice the LSP support when updating className!
    <html lang="en" className="bg-base text-primary">
      <body>{children}</body>
    </html>
  );
}
