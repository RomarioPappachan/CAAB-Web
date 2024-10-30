import "./globals.css";

export const metadata = {
  title: "CAAB Score",
  description: "Welcome to CAAB, CorpRank Advice and Audit Body (P) Ltd, your trusted partner for comprehensive corporate compliance solutions and CAABScore .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body
        className="m-0 p-0 bg-white overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
