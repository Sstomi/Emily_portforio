export default function GoogleAnalytics() {
    // 環境変数から測定IDを取得
      const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    
      return (
        <>
          {/* Google Analytics の読み込み */}
          <script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
    
          {/* 初期化コード */}
          <script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `,
            }}
          />
        </>
      )
    }