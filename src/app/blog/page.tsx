import BlogPostCard from '@/components/shared/BlogPostCard';
import { blogPosts } from '@/lib/data';
import PageHeader from '@/components/shared/PageHeader';
import { Newspaper } from 'lucide-react';

export default function BlogPage() {
  // Simple category filtering logic (can be expanded)
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="space-y-12">
      <PageHeader
        title="Wellness Insights Blog"
        subtitle="Explore articles, tips, and inspiration on naturopathy, yoga, Ayurveda, and physiotherapy to support your journey to well-being."
        Icon={Newspaper}
      />
      
      {/* Optional: Category filter */}
      {/* <div className="mb-8 flex flex-wrap gap-2">
        {categories.map(category => (
          <Button key={category} variant="outline" size="sm" className="text-accent border-accent hover:bg-accent hover:text-accent-foreground">
            {category}
          </Button>
        ))}
      </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
