
import PageHeader from '@/components/shared/PageHeader';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Aarogyadhama, our services, and our approach to wellness."
        Icon={HelpCircle}
      />
      <section className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-foreground/80 mb-6">
          Our FAQ section is currently under development. Please check back soon for detailed answers to your questions.
        </p>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-headline text-primary mb-3">Have a Question?</h3>
          <p className="text-foreground/70 mb-4">
            If you have any immediate questions or need assistance, please don&apos;t hesitate to get in touch with us.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-accent-foreground bg-accent hover:bg-accent/90">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
