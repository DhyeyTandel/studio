import Image from 'next/image';
import { services, practitioners } from '@/lib/data';
import type { Service } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Users } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const servicePractitioners = practitioners.filter(p => 
    p.services.some(sName => sName.toLowerCase().includes(service.name.toLowerCase()))
  );

  return (
    <div className="space-y-12">
      <PageHeader title={service.name} Icon={service.Icon} />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <Image
            src={service.image}
            alt={service.name}
            width={800}
            height={500}
            className="rounded-lg shadow-xl object-cover w-full"
            data-ai-hint={service.dataAiHint}
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">{service.longDescription}</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact?service=${service.slug}">Book This Service</Link>
          </Button>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-headline text-primary mb-6 flex items-center">
          <CheckCircle className="h-8 w-8 mr-3 text-accent" />
          Benefits of {service.name}
        </h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 shrink-0" />
              <span className="text-foreground/80">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {service.faqs.length > 0 && (
        <section>
          <h2 className="text-3xl font-headline text-primary mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="bg-card/50 rounded-md mb-2 shadow-sm">
                <AccordionTrigger className="p-4 text-left font-semibold hover:no-underline text-foreground/90">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0 text-foreground/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      {servicePractitioners.length > 0 && (
        <section>
          <h2 className="text-3xl font-headline text-primary mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-accent" />
            Practitioners Offering {service.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePractitioners.map(practitioner => (
              <Link key={practitioner.id} href="/about" className="block">
                <div className="p-4 bg-card/50 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                  <Image src={practitioner.image} alt={practitioner.name} width={100} height={100} className="rounded-full mx-auto mb-3" data-ai-hint={practitioner.dataAiHint}/>
                  <h4 className="font-semibold text-primary">{practitioner.name}</h4>
                  <p className="text-sm text-muted-foreground">{practitioner.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
