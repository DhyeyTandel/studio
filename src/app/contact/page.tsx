import ContactForm from '@/components/forms/ContactForm';
import PageHeader from '@/components/shared/PageHeader';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import { contactDetails } from '@/lib/data';

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Get in Touch"
        subtitle="We're here to answer your questions and help you embark on your wellness journey. Reach out to us through any of the methods below, or visit our serene center."
        Icon={Mail}
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl font-headline text-primary">Send Us a Message</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-headline text-primary">Contact Information</h2>
          <div className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-foreground/90">Our Address</h3>
                <p className="text-foreground/80">{contactDetails.address}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-foreground/90">Phone</h3>
                <p className="text-foreground/80">{contactDetails.phone}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-foreground/90">Email</h3>
                <p className="text-foreground/80">{contactDetails.email}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-accent mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-foreground/90">Opening Hours</h3>
                <p className="text-foreground/80">Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p className="text-foreground/80">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-foreground/80">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="mt-12">
        <h2 className="text-3xl font-headline text-primary mb-6 text-center">Find Our Center</h2>
         <div className="rounded-lg shadow-xl overflow-hidden border-4 border-primary/20">
            <Image
                src={contactDetails.mapImage}
                alt="Map showing location of Naturopathic Harmony"
                width={1200}
                height={400}
                className="w-full object-cover"
                data-ai-hint={contactDetails.mapDataAiHint}
            />
         </div>
      </section>
    </div>
  );
}
