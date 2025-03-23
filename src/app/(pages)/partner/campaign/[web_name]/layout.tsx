import "./index.css";
import Theme from "./components/Theme";
import ReactQueryProvider from "@/shared/react-query/provider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme>
      <ReactQueryProvider >
        <html lang="en">
          <head>
            <link rel="shortcut icon" href="/image/logo.jpg" />
          </head>
          <body>
            {children}
          </body>
        </html>
      </ReactQueryProvider>
    </Theme>
  );
}
