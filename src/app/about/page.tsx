import Image from 'next/image';
import { founderInfo, practitioners } from '@/lib/data';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, BookHeart } from 'lucide-react'; // Changed Leaf to Award

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Our Story & Philosophy"
        subtitle="Discover the heart behind Naturopathic Harmony and our commitment to your well-being."
        Icon={BookHeart}
      />

      <section className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2">
          <Image
            src={founderInfo.image}
            alt={founderInfo.name}
            width={400}
            height={400}
            className="rounded-lg shadow-xl mx-auto object-cover aspect-square"
            data-ai-hint={founderInfo.dataAiHint}
          />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-3xl font-headline text-primary mb-4">{founderInfo.name}</h2>
          <h3 className="text-xl font-semibold text-accent mb-4">{founderInfo.title}</h3>
          {founderInfo.story.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-foreground/80 mb-4 leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="py-12 bg-muted/30 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-container px-4 sm:px-6 md:px-8 lg:px-container">
        <div className="text-center mb-12">
          <Users className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-headline text-primary mb-4">Meet Our Dedicated Team</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Our practitioners are passionate about holistic health and committed to providing you with exceptional care.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practitioners.map((practitioner) => (
            <Card key={practitioner.id} className="flex flex-col text-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pt-6">
                <Image
                  src={practitioner.image}
                  alt={practitioner.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
                  data-ai-hint={practitioner.dataAiHint}
                />
                <CardTitle className="text-2xl font-headline text-primary">{practitioner.name}</CardTitle>
                <CardDescription className="text-accent font-semibold">{practitioner.title}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/70 leading-relaxed px-2">{practitioner.bio}</p>
                {practitioner.services.length > 0 && (
                   <p className="text-xs text-muted-foreground mt-3">Specializes in: {practitioner.services.join(', ')}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <Award className="h-16 w-16 text-primary mx-auto mb-4" />
        <h2 className="text-4xl font-headline text-primary mb-4">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
            <div className="p-4">
                <h3 className="text-xl font-headline text-accent mb-2">Integrity</h3>
                <p className="text-foreground/70">Upholding the highest ethical standards in all our interactions.</p>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-headline text-accent mb-2">Compassion</h3>
                <p className="text-foreground/70">Providing care with empathy, understanding, and respect.</p>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-headline text-accent mb-2">Empowerment</h3>
                <p className="text-foreground/70">Educating and supporting you to take an active role in your health.</p>
            </div>
        </div>
      </section>
    </div>
  );
}
