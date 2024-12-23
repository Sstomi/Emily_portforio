import Image from "next/image";
import Button from "@/components/Button";

// トップページの設定
export const metadata = {
  title: 'ホーム', // ページのタイトル
  description: 'ウェブサイトのトップページです', // ページの説明
  openGraph: {
    title: 'ホーム',
    description: 'ウェブサイトのトップページです',
    images: [
      {
        url: 'https://glittering-kitten-678a8c.netlify.app/images/seo/OpenGraph-image1200-630.png',
        width: 1200,
        height: 630,
      }
    ],
  },
}


export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl font-bold">Creative Web Designer</h1>
              <p className="text-xl text-gray-600">
                Hi, I&apos;m Emily. I create beautiful and functional websites that
                help businesses grow.
              </p>
              <Button>View My Work</Button>
            </div>

            <div className="flex-1 relative h-[400px]">
              <Image
                src="/images/emily-portrait.jpg"
                alt="Emily"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Design",
                description: "Creating beautiful, responsive websites",
              },
              {
                title: "UI/UX Design",
                description: "Crafting seamless user experiences",
              },
              {
                title: "Brand Identity",
                description: "Developing unique brand identities",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
