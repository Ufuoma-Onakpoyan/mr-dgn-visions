-- Update existing blog posts with featured images
UPDATE blog_posts 
SET featured_image_url = CASE 
  WHEN slug = 'welcome-to-mrdgn-entertainment' THEN 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=450&fit=crop'
  WHEN slug = 'future-of-nigerian-cinema' THEN 'https://images.unsplash.com/photo-1489599160615-8b2a9cbfcda4?w=800&h=450&fit=crop'
  WHEN slug = 'creating-content-digital-age' THEN 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=450&fit=crop'
  ELSE featured_image_url
END
WHERE slug IN ('welcome-to-mrdgn-entertainment', 'future-of-nigerian-cinema', 'creating-content-digital-age');