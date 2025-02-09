import Document, { Html, Head, Main, NextScript } from 'next/document';

    class MyDocument extends Document {
      render() {
        return (
          <Html lang="en">
            <Head>
              {/* Hotjar Tracking Code (Replace YOUR_HOTJAR_ID)*/}
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    (function(h,o,t,j,a,r){
                      h.hj = h.hj || function(){(h.hj.q = h.hj.q || []).push(arguments)};
                      h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                  `,
                }}
              />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
      }
    }

    export default MyDocument;
