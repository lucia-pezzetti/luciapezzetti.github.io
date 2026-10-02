import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "katex/dist/katex.min.css";

export const metadata = {
  metadataBase: new URL("https://luciapezzetti.com"),
  title: "Lucia Pezzetti",
  description: "Research, publications, news, and teaching by Lucia Pezzetti.",
  applicationName: "Lucia Pezzetti",
  openGraph: {
    siteName: "Lucia Pezzetti",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
