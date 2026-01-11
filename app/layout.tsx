import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold tracking-tight">
              Scholarship Alert
            </h1>

            <nav className="text-sm text-gray-600 space-x-6">
              <a href="/" className="hover:text-black">Home</a>
              <a href="/subscribe" className="hover:text-black">Subscribe</a>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>

        <footer className="border-t bg-white">
          <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Scholarship Alert.
              Always apply via official sources. No application fees.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
