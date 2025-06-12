import ServiceCard from '@/components/shared/ServiceCard';
import { services } from '@/lib/data';
import PageHeader from '@/components/shared/PageHeader';
import { HeartPulse } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Our Healing Services"
        subtitle="Explore our comprehensive range of naturopathic services designed to nurture your body, mind, and spirit towards optimal health and harmony."
        Icon={HeartPulse}
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <section className="mt-16 py-12 bg-primary/10 rounded-lg text-center">
        <h3 className="text-3xl font-headline text-primary mb-4">Not Sure Where to Start?</h3>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-6">
          Let us help you find the right path. Get a personalized recommendation or contact us for a free consultation.
        </p>
        <div className="space-x-4">
          <a href="/recommendations" className="inline-block px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 transition-colors">
            Get AI Recommendation
          </a>
          <a href="/contact" className="inline-block px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors">
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
