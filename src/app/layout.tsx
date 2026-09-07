export const metadata = {
  title: "Paulo Roberto // API Engine",
  description: "Cyberpunk HUD Banner Generator API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#06060a", color: "#00f0ff", fontFamily: "monospace" }}>
        {children}
      </body>
    </html>
  );
}