import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fix: Ensure fonts load properly */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      
      <body>
        {/* Fix: Dark mode script moved into <head> to prevent FOUC */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const isDarkMode = localStorage.theme === 'dark' || 
                  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDarkMode) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `
        }} />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
