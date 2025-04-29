
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import blogData from "../data/blog.json";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  content: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (id) {
      // Simulate fetching data with a small delay
      const timer = setTimeout(() => {
        const foundPost = blogData.find((p) => p.id === parseInt(id));
        setPost(foundPost || null);
        
        // Get related posts (excluding current post)
        if (foundPost) {
          const related = blogData
            .filter((p) => p.id !== foundPost.id)
            .slice(0, 2);
          setRelatedPosts(related);
        }
        
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [id]);

  // Function to convert markdown content to simple HTML
  const renderContent = (content: string) => {
    // Simple markdown conversion for headers
    let html = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold my-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold my-5">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold my-4">$1</h3>')
      // Lists
      .replace(/^\* (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
      .replace(/^- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-6 list-decimal">$2</li>')
      // Paragraphs
      .replace(/^\s*$/gm, '</p><p class="my-4">')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Wrap in paragraph
      .replace(/^(?!<[hl]|<\/[hl]|<li|<\/li|<p|<\/p)(.+)/gm, '<p class="my-4">$1</p>');

    return { __html: html };
  };

  if (loading) {
    return (
      <div className="container-custom py-12">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <div className="flex items-center gap-2 mb-6">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-[400px] w-full mb-8" />
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-4 w-full mb-3" />
          ))}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-6">The blog post you're looking for does not exist.</p>
        <Link to="/blog">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="gradient-overlay"></div>
        </div>
        <div className="container-custom relative h-full flex flex-col justify-center">
          <div className="max-w-3xl text-white">
            <Link to="/blog" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-white/90">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={renderContent(post.content)} />

            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-ntil-200 flex items-center justify-center text-ntil-600 text-xl font-bold">
                    {post.author.split(" ").map(name => name[0]).join("")}
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold">{post.author}</p>
                  <p className="text-gray-600">Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${relatedPost.image})` }}
                      ></div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2 group-hover:text-ntil-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
