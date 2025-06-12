import Image from 'next/image';
import type { Testimonial } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { format } from 'date-fns';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full rounded-lg shadow-lg bg-card/80 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        {testimonial.image && (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={60}
            height={60}
            className="rounded-full object-cover"
            data-ai-hint={testimonial.dataAiHint}
          />
        )}
        <div className="flex-1">
          <CardTitle className="text-lg font-headline">{testimonial.name}</CardTitle>
          <p className="text-xs text-muted-foreground">{format(new Date(testimonial.date), 'MMMM d, yyyy')}</p>
        </div>
        <div className="flex items-center text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'fill-current' : ''}`} />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <Quote className="h-8 w-8 text-primary/50 mb-2 transform -scale-x-100" />
        <CardDescription className="text-base text-foreground/90 leading-relaxed italic">
          {testimonial.text}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
