import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "katex/dist/katex.min.css";

export const metadata = {
  title: "Lucia Pezzetti",
  description: "Research, publications, news, and teaching by Lucia Pezzetti.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem("color-theme");var theme=saved||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch(e){document.documentElement.dataset.theme="light";}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
