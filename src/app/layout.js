import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "katex/dist/katex.min.css";

export const metadata = {
  title: "Lucia Pezzetti",
  description: "Research, publications, news, and teaching by Lucia Pezzetti.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
