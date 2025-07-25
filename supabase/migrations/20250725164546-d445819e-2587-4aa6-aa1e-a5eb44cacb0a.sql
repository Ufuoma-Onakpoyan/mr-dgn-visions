-- Create blog posts table for MrDGN Entertainment
CREATE TABLE public.blog_posts (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT,
    featured_image_url TEXT,
    author TEXT NOT NULL DEFAULT 'MrDGN Entertainment',
    published BOOLEAN NOT NULL DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    tags TEXT[] DEFAULT ARRAY[]::TEXT[],
    view_count INTEGER DEFAULT 0
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for blog posts (public read access, admin write)
CREATE POLICY "Blog posts are viewable by everyone" 
ON public.blog_posts 
FOR SELECT 
USING (published = true OR auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can create blog posts" 
ON public.blog_posts 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update blog posts" 
ON public.blog_posts 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete blog posts" 
ON public.blog_posts 
FOR DELETE 
USING (auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to set published_at when published becomes true
CREATE OR REPLACE FUNCTION public.set_published_at()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.published = true AND OLD.published = false THEN
        NEW.published_at = now();
    ELSIF NEW.published = false THEN
        NEW.published_at = NULL;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic published_at setting
CREATE TRIGGER set_blog_posts_published_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.set_published_at();

-- Create index for better performance
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published, published_at DESC);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_tags ON public.blog_posts USING GIN(tags);

-- Insert some sample blog posts
INSERT INTO public.blog_posts (title, slug, content, excerpt, published, tags) VALUES
(
    'Welcome to MrDGN Entertainment',
    'welcome-to-mrdgn-entertainment',
    'We are excited to announce the launch of MrDGN Entertainment, a subsidiary of MrDGN Group. Our mission is to create compelling content across multiple platforms including movies, YouTube long-form content, and engaging shorts. As a Nigerian entertainment company, we are committed to showcasing the rich culture and talent of Nigeria to the world.',
    'Announcing the launch of MrDGN Entertainment - your gateway to quality Nigerian entertainment content.',
    true,
    ARRAY['announcement', 'company', 'nigeria']
),
(
    'The Future of Nigerian Cinema',
    'future-of-nigerian-cinema',
    'Nigerian cinema, popularly known as Nollywood, has come a long way from its humble beginnings. At MrDGN Entertainment, we believe in pushing the boundaries of storytelling and production quality. Our upcoming projects will showcase the incredible talent and stories that Nigeria has to offer, bringing them to both local and international audiences.',
    'Exploring how MrDGN Entertainment is contributing to the evolution of Nigerian cinema.',
    true,
    ARRAY['nollywood', 'cinema', 'future', 'storytelling']
),
(
    'Creating Content for the Digital Age',
    'creating-content-digital-age',
    'In today''s digital landscape, content creation has evolved beyond traditional media. Our YouTube strategy focuses on both long-form educational and entertainment content, as well as engaging shorts that capture the essence of Nigerian culture and contemporary life. We understand that modern audiences consume content differently, and we are adapting our approach accordingly.',
    'How MrDGN Entertainment is adapting content creation for modern digital platforms.',
    true,
    ARRAY['youtube', 'digital', 'content', 'strategy']
);