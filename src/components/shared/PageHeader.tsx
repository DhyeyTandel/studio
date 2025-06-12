import type { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  Icon?: LucideIcon;
  className?: string;
}

export default function PageHeader({ title, subtitle, Icon, className }: PageHeaderProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      {Icon && <Icon className="h-16 w-16 text-primary mx-auto mb-4" />}
      <h1 className="text-4xl md:text-5xl font-headline text-primary mb-3">{title}</h1>
      {subtitle && <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
