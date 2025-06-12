import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/shared/ServiceCard';
import { services } from '@/lib/data';
import HeroSection from '@/components/shared/HeroSection';
import { Leaf, CheckCircle, Users, Sparkles } from 'lucide-react';

export default function HomePage() {
  const featuredServices = services.slice(0, 3);

  return (
    <div className="space-y-16">
      <HeroSection
        title="Welcome to Aarogyadhama"
        subtitle="Your sanctuary for holistic wellness, integrating ancient wisdom with modern understanding to nurture your mind, body, and spirit."
        imageUrl="https://placehold.co/1920x1080.png"
        imageAlt="Serene natural landscape"
        imageAiHint="serene nature landscape"
        ctaText="Explore Our Services"
        ctaLink="/services"
      />

      <section className="py-16">
        <div className="text-center mb-12">
          <Leaf className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-headline text-primary mb-4">Discover Your Path to Wellness</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            At Aarogyadhama, we believe in the body&apos;s innate ability to heal. We offer a compassionate and comprehensive approach to health, guiding you towards balance and vitality through personalized care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <CheckCircle className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-headline text-primary mb-2">Personalized Care</h3>
            <p className="text-foreground/70">Tailored treatments addressing your unique needs and health goals.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-headline text-primary mb-2">Expert Practitioners</h3>
            <p className="text-foreground/70">Compassionate and experienced professionals dedicated to your well-being.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Sparkles className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-headline text-primary mb-2">Holistic Approach</h3>
            <p className="text-foreground/70">Integrating mind, body, and spirit for comprehensive healing and vitality.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-container px-4 sm:px-6 md:px-8 lg:px-container"> {/* Adjust padding based on container */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline text-primary mb-4">Our Core Services</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our range of services designed to support your journey to optimal health.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3 rounded-md shadow-md transition-transform hover:scale-105">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 text-center">
         <Image 
            src="https://placehold.co/800x400.png" 
            alt="Calm meditation space" 
            width={800} 
            height={400} 
            className="mx-auto rounded-lg shadow-xl mb-8"
            data-ai-hint="meditation space"
          />
        <h2 className="text-4xl font-headline text-primary mb-6">Ready to Begin Your Journey?</h2>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8">
          Take the first step towards a healthier, more harmonious life. Book a consultation or explore our resources.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 rounded-md shadow-md transition-transform hover:scale-105">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-accent border-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-3 rounded-md shadow-md transition-transform hover:scale-105">
            <Link href="/recommendations">Get Recommendations</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
