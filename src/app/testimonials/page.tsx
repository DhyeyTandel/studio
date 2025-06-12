import TestimonialCard from '@/components/shared/TestimonialCard';
import { testimonials } from '@/lib/data';
import PageHeader from '@/components/shared/PageHeader';
import { MessagesSquare } from 'lucide-react'; // Changed from MessageSquare to MessagesSquare for plural
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TestimonialsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Words from Our Community"
        subtitle="Hear what our valued clients have to say about their experiences at Naturopathic Harmony. Their journeys are a testament to the healing and balance we strive to foster."
        Icon={MessagesSquare}
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <section className="mt-16 py-12 bg-accent/10 rounded-lg text-center">
        <h3 className="text-3xl font-headline text-accent mb-4">Share Your Story</h3>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-6">
          Have you had a positive experience with us? We&apos;d love to hear about it! Your story can inspire others on their wellness journey.
        </p>
        <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 rounded-md shadow-md transition-transform hover:scale-105">
            <Link href="/contact?subject=My Testimonial">Share Your Testimonial</Link>
          </Button>
      </section>
    </div>
  );
}
