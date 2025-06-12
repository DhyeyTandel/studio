import Link from 'next/link';
import Image from 'next/image';
import type { Service } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { Icon } = service;
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader className="p-0">
        <Image
          src={service.image}
          alt={service.name}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
          data-ai-hint={service.dataAiHint}
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center mb-3">
          {Icon && <Icon className="h-8 w-8 text-primary mr-3" />}
          <CardTitle className="text-2xl font-headline text-primary">{service.name}</CardTitle>
        </div>
        <CardDescription className="text-foreground/80 leading-relaxed">{service.shortDescription}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="default" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={`/services/${service.slug}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
