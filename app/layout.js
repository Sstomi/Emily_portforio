import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  // 基本設定
  title: {
    default: "Emily's Portfolio", // デフォルトのタイトル
    template: '%s | Emily\'s Portfolio' // 個別ページのタイトルテンプレート
  },
  description: 'Creative Web Designer based in Tokyo',
  
  // メタデータのベースURL設定
  metadataBase: new URL('https://www.example.com'), // あなたのドメインに変更してください
  
  // 基本的なメタタグ
  keywords: ['Web Design', 'Portfolio', 'Tokyo', 'Creative Design'],
  authors: [{ name: 'Emily', url: 'https://www.example.com' }],
  creator: 'Emily',
  
  // SNSカード設定（OGP）
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.example.com',
    siteName: "Emily's Portfolio",
    title: "Emily's Portfolio",
    description: 'Creative Web Designer based in Tokyo',
    images: [
      {
        url: '/images/seo/OpenGraph-image1200-630.png', //　/images/OpenGraph-image1200-630.png を配置
        width: 1200,
        height: 630,
        alt: "Emily's Portfolio",
      }
    ],
  },
  
  // Twitterカード設定
  twitter: {
    card: 'summary_large_image',
    title: "Emily's Portfolio",
    description: 'Creative Web Designer based in Tokyo',
    creator: '@emilytwitter', // あなたのTwitterハンドル
    images: ['/images/OpenGraph-image1200-630.png'], // OGP画像と同じものを使用
  },
  
  // アイコン設定
  icons: {
    icon: '/icon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  
  // その他のメタデータ
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // 検索エンジン向けの追加情報
  verification: {
    google: 'あなたのGoogle Search Console確認コード', // 必要な場合
  },
  
  // 代替言語設定（多言語対応の場合）
  alternates: {
    canonical: 'https://www.example.com',
    languages: {
      'ja-JP': 'https://www.example.com/ja',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
