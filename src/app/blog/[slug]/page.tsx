import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="mb-4">
        <Button variant="outline" asChild className="text-accent border-accent hover:bg-accent hover:text-accent-foreground">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>

      <PageHeader title={post.title} Icon={post.Icon} />

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground mb-6">
        <div className="flex items-center">
          <UserCircle className="h-5 w-5 mr-2" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center">
          <CalendarDays className="h-5 w-5 mr-2" />
          <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
        </div>
        <div className="flex items-center">
          <Tag className="h-5 w-5 mr-2" />
          <Badge variant="secondary">{post.category}</Badge>
        </div>
      </div>

      <Image
        src={post.image}
        alt={post.title}
        width={1000}
        height={500}
        className="rounded-lg shadow-xl object-cover w-full aspect-[2/1]"
        data-ai-hint={post.dataAiHint}
      />

      <article 
        className="prose prose-lg prose-headings:font-headline prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80 max-w-none text-foreground/90"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="pt-8 border-t text-center">
        <p className="text-muted-foreground mb-4">Enjoyed this article? Share it with your friends!</p>
        {/* Add social sharing buttons here if desired */}
        <Button variant="default" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/blog">
            Explore More Articles
          </Link>
        </Button>
      </div>
    </div>
  );
}
