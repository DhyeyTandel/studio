import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  imageAiHint: string;
  ctaText?: string;
  ctaLink?: string;
  showOverlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  imageAiHint,
  ctaText,
  ctaLink,
  showOverlay = true,
}: HeroSectionProps) {
  return (
    <div className="relative h-[calc(70vh-var(--header-height,4rem))] min-h-[400px] max-h-[600px] w-full -mt-8 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-container"> {/* Adjust negative margins based on container padding */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="brightness-75"
        data-ai-hint={imageAiHint}
        priority
      />
      {showOverlay && <div className="absolute inset-0 bg-black/30"></div>}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-white drop-shadow-md mb-4">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 drop-shadow-sm max-w-2xl mb-8">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-md shadow-lg transition-transform hover:scale-105">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
