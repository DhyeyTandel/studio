
import PageHeader from '@/components/shared/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Receipt, IndianRupee, Globe } from 'lucide-react';

export default function TariffPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Our Health Package Tariffs"
        subtitle="Find detailed pricing information for our health packages, with options for Indian and International guests."
        Icon={Receipt}
      />

      <section className="max-w-4xl mx-auto">
        <Tabs defaultValue="indian" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="indian">
              <IndianRupee className="mr-2 h-5 w-5" /> Indian Tariffs
            </TabsTrigger>
            <TabsTrigger value="international">
              <Globe className="mr-2 h-5 w-5" /> Non-Indian Tariffs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="indian" className="mt-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary flex items-center">
                  <IndianRupee className="mr-2 h-6 w-6" />
                  Tariffs for Indian Nationals
                </CardTitle>
                <CardDescription>
                  Detailed pricing for our comprehensive health packages, specially for Indian residents.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">
                  The specific tariff details for Indian nationals will be listed here. This section will include package names, durations, inclusions, and prices in INR.
                </p>
                <p className="text-muted-foreground text-sm">
                  (Example: Package A - 7 Days Wellness Retreat - ₹XX,XXX)
                </p>
                <p className="text-muted-foreground text-sm">
                  Please contact us for the most up-to-date information and for any custom package inquiries.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="international" className="mt-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary flex items-center">
                  <Globe className="mr-2 h-6 w-6" />
                  Tariffs for Non-Indian Guests
                </CardTitle>
                <CardDescription>
                  Pricing information for our international guests seeking our holistic health packages.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80">
                  The specific tariff details for non-Indian guests will be listed here. This section will include package names, durations, inclusions, and prices (potentially in USD or other relevant currencies, or with clear conversion guidelines).
                </p>
                <p className="text-muted-foreground text-sm">
                  (Example: Package B - 10 Days Detox Program - $X,XXX)
                </p>
                 <p className="text-muted-foreground text-sm">
                  We welcome guests from all over the world. Please reach out for detailed pricing and assistance with your booking.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
        <h3 className="text-2xl font-headline text-primary mb-3">Booking Information</h3>
        <p className="text-foreground/80 max-w-xl mx-auto mb-6">
          For detailed information on package inclusions, availability, and to make a booking, please visit our 'Book Now' page or contact our guest services team.
        </p>
        <div className="space-x-4">
          <a href="/health-packages/book-now" className="inline-block px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 transition-colors">
            Book a Package
          </a>
          <a href="/contact" className="inline-block px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold shadow hover:bg-secondary/90 transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
