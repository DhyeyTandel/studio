
"use client";
import Link from 'next/link';
import { Leaf, Menu, ChevronDown, HelpCircle } from 'lucide-react'; // Added HelpCircle for potential future use
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

// Define types for navigation items
type NavLinkItem = {
  href: string;
  label: string;
  isDropdown?: false;
};

type NavDropdownItem = {
  label: string;
  isDropdown: true;
  items: Array<{ href: string; label: string }>;
};

type NavItem = NavLinkItem | NavDropdownItem;

const specialtySubItemsList: Array<{ href: string; label: string }> = [
  { label: 'Neurology', href: '/specialty/neurology' },
  { label: 'Oncology', href: '/specialty/oncology' },
  { label: 'Cardiology', href: '/specialty/cardiology' },
  { label: 'Pulmonology', href: '/specialty/pulmonology' },
  { label: 'Psychiatry', href: '/specialty/psychiatry' },
  { label: 'Rheumatology', href: '/specialty/rheumatology' },
  { label: 'Spinal Disorder', href: '/specialty/spinal-disorder' },
  { label: 'Diabetes and Metabolic Disorders', href: '/specialty/diabetes-metabolic-disorders' },
  { label: 'Gastroenterology', href: '/specialty/gastroenterology' },
  { label: 'Endocrinology', href: '/specialty/endocrinology' },
  { label: 'Promotion of positive health (PPH)', href: '/specialty/pph' },
];

const healthPackagesSubItemsList: Array<{ href: string; label: string }> = [
  { label: 'Health Packages', href: '/health-packages' },
  { label: 'Book Now', href: '/health-packages/book-now' },
  { label: 'Tariff', href: '/health-packages/tariff' },
  { label: 'Rules And Regulation', href: '/health-packages/rules-and-regulation' },
  { label: 'Faqs', href: '/health-packages/faq' },
];

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  {
    label: 'Health Packages',
    isDropdown: true,
    items: healthPackagesSubItemsList,
  },
  {
    label: 'Specialty Integrative Medicine',
    isDropdown: true,
    items: specialtySubItemsList,
  },
  { href: '/recommendations', label: 'Recommendations' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/faq', label: 'FAQ' },
];

// Helper function to determine if a dropdown parent or its children are active
const isNavItemActive = (item: NavItem, currentPathname: string): boolean => {
  if (item.isDropdown) {
    return item.items.some(subItem => currentPathname.startsWith(subItem.href));
  }
  return currentPathname === item.href;
};


export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center gap-2 mr-6" onClick={() => setIsSheetOpen(false)}>
          <Leaf className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-semibold text-foreground">
            Aarogyadhama
          </span>
        </Link>

        <nav className="hidden md:flex gap-3 items-center"> {/* Reduced gap from 4 to 3 */}
          {navItems.map((item) => {
            const isActive = isNavItemActive(item, pathname);
            if (item.isDropdown) {
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary cursor-pointer flex items-center gap-1 py-2",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.label} asChild>
                        <Link href={subItem.href} className={cn(pathname.startsWith(subItem.href) ? "font-semibold text-primary" : "")}>
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary py-2",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden ml-auto"> {/* Added ml-auto here */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-background p-6 flex flex-col">
               <Link href="/" className="flex items-center gap-2 mb-6" onClick={() => setIsSheetOpen(false)}>
                <Leaf className="h-7 w-7 text-primary" />
                <span className="font-headline text-2xl font-semibold text-foreground">
                  Aarogyadhama
                </span>
              </Link>
              <div className="flex flex-col gap-1 overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = isNavItemActive(item, pathname);
                  if (item.isDropdown) {
                    return (
                      <Accordion type="single" collapsible className="w-full" key={item.label}>
                        <AccordionItem value={item.label} className="border-b-0">
                          <AccordionTrigger
                            className={cn(
                              "text-lg font-medium transition-colors hover:text-primary hover:no-underline py-3 flex justify-between w-full",
                              isActive ? "text-primary" : "text-foreground"
                            )}
                          >
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="pt-0 pb-2 pl-4">
                            <div className="flex flex-col gap-3 mt-2">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={() => setIsSheetOpen(false)}
                                  className={cn(
                                    "text-base font-medium transition-colors hover:text-primary",
                                    pathname.startsWith(subItem.href) ? "text-primary" : "text-muted-foreground"
                                  )}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsSheetOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary py-3",
                        isActive ? "text-primary" : "text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
