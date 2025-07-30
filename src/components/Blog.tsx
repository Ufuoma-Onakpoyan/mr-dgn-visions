import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { supabase } from "@/integrations/supabase/client";
import { processContentForParagraphs } from "@/lib/utils";
import { Calendar, User, ArrowRight, Eye } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import blogFeatured1 from "@/assets/blog-featured-1.jpg";
import blogFeatured2 from "@/assets/blog-featured-2.jpg";
import blogFeatured3 from "@/assets/blog-featured-3.jpg";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  published_at: string;
  tags: string[] | null;
  view_count: number | null;
  featured_image_url?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(50); // Show more articles for the full blog page

      if (error) {
        console.error('Error fetching blog posts:', error);
        setPosts(getEnhancedFallbackPosts());
        return;
      }

      // If no posts from database, use fallback
      if (!data || data.length === 0) {
        setPosts(getEnhancedFallbackPosts());
      } else {
        // Map Supabase data and add featured images
        const enhancedPosts = data.map((post, index) => ({
          ...post,
          featured_image_url: post.featured_image_url || getFeaturedImage(index)
        }));
        setPosts(enhancedPosts);
      }
    } catch (error) {
      console.error('Error:', error);
      setPosts(getEnhancedFallbackPosts());
    } finally {
      setLoading(false);
    }
  };

  const getFeaturedImage = (index: number) => {
    const images = [blogFeatured1, blogFeatured2, blogFeatured3];
    return images[index % images.length];
  };

  const getEnhancedFallbackPosts = (): BlogPost[] => [
    {
      id: "1",
      title: "The Future of Nigerian Cinema: Bridging Tradition and Innovation",
      slug: "future-nigerian-cinema",
      excerpt: "Exploring how modern Nigerian filmmakers are revolutionizing storytelling while honoring cultural heritage, creating content that resonates globally.",
      author: "Adaora Okafor",
      published_at: "2024-01-15T10:00:00Z",
      tags: ["Nigerian Cinema", "Innovation", "Culture"],
      view_count: 2456,
      featured_image_url: blogFeatured2
    },
    {
      id: "2", 
      title: "YouTube Success: Creating Engaging Long-Form Content",
      slug: "youtube-long-form-success",
      excerpt: "Master the art of YouTube long-form content creation with proven strategies for audience engagement, storytelling, and building a loyal subscriber base.",
      author: "Emeka Okonkwo",
      published_at: "2024-01-10T14:30:00Z",
      tags: ["YouTube", "Content Creation", "Digital Marketing"],
      view_count: 1823,
      featured_image_url: blogFeatured3
    },
    {
      id: "3",
      title: "Short-Form Content Revolution: TikTok and Beyond",
      slug: "short-form-content-revolution", 
      excerpt: "Understanding the power of short-form content and how it's reshaping entertainment consumption patterns across Africa and globally.",
      author: "Kemi Afolabi",
      published_at: "2024-01-05T09:15:00Z",
      tags: ["Short-Form", "TikTok", "Social Media"],
      view_count: 3102,
      featured_image_url: blogFeatured1
    }
  ];


  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="text-muted-foreground mt-4">Loading latest articles...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest thoughts on entertainment, Nigerian cinema, 
              and the evolving landscape of digital content creation.
            </p>
          </div>

          {/* Blog Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post, index) => (
                <Card key={post.id} className="group card-hover scroll-reveal border-0 bg-gradient-to-br from-card to-card/50 overflow-hidden backdrop-blur-sm" style={{boxShadow: 'var(--shadow-card)'}}>
                  {/* Featured Image */}
                  <div className="relative h-52 overflow-hidden">
                    {post.featured_image_url ? (
                      <img 
                        src={post.featured_image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <div className="text-primary/40 text-6xl">📖</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(post.tags || []).slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div 
                      className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: processContentForParagraphs(post.excerpt || '') }}
                    />

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(post.published_at)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{post.view_count || 0}</span>
                      </div>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="w-full group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 scroll-reveal">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No Articles Yet</h3>
              <p className="text-muted-foreground">
                We're working on some exciting content. Check back soon!
              </p>
            </div>
          )}

          {/* View All Button */}
          {posts.length > 0 && (
            <div className="text-center scroll-reveal">
              <Link to="/blog">
                <Button variant="outline" size="lg" className="group">
                  View All Articles
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;