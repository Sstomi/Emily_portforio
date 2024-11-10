import Image from 'next/image'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Blog
      </h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="block group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col md:flex-row">
                {/* 左側：画像 */}
                <div className="relative w-full md:w-1/3 h-48 md:h-64">
                  <Image
                    src={post.frontmatter.image}
                    alt={post.frontmatter.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* 右側：コンテンツ */}
                <div className="w-full md:w-2/3 p-6 md:p-8">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">
                    {post.frontmatter.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-4">
                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.frontmatter.excerpt}
                  </p>
                  
                  {post.frontmatter.tags && (
                    <div className="flex flex-wrap gap-2">
                      {post.frontmatter.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}