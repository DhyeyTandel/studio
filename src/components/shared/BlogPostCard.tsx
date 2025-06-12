import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
import { format } from 'date-fns';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { Icon } = post;
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader className="p-0">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={300}
            className="w-full h-48 object-cover"
            data-ai-hint={post.dataAiHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        {Icon && <Icon className="h-8 w-8 text-primary mb-2" />}
        <CardTitle className="text-xl font-headline mb-2 hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <div className="text-xs text-muted-foreground mb-3 flex flex-wrap gap-x-4 gap-y-1">
          <span className="flex items-center">
            <UserCircle className="h-4 w-4 mr-1" />
            {post.author}
          </span>
          <span className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1" />
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </span>
        </div>
        <CardDescription className="text-sm text-foreground/80 leading-relaxed line-clamp-3">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="text-accent border-accent hover:bg-accent hover:text-accent-foreground">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
