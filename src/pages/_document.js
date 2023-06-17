import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* NEW FONTS IMPORTED POPPINS AND ROBTO   */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&family=Roboto:wght@400;500;700;900&display=swap" 
        rel="stylesheet" />

        {/* FAVICON LINK */}
        <script src="https://kit.fontawesome.com/0ede7196cc.js" crossorigin="anonymous"></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
