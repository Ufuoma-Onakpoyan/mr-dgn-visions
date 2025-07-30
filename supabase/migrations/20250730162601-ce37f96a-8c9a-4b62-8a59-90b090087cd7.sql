-- Create trigger to automatically set published_at when a post is published
CREATE TRIGGER set_published_at_trigger
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION set_published_at();

-- Update existing published posts that have null published_at
UPDATE blog_posts 
SET published_at = COALESCE(updated_at, created_at)
WHERE published = true AND published_at IS NULL;