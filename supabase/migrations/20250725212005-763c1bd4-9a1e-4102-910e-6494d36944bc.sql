-- Create function to increment view count for blog posts
CREATE OR REPLACE FUNCTION public.increment_view_count(post_slug text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    UPDATE blog_posts 
    SET view_count = COALESCE(view_count, 0) + 1 
    WHERE slug = post_slug AND published = true;
END;
$$;