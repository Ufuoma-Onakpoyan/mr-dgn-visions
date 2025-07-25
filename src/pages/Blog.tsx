import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

const BlogPage = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;