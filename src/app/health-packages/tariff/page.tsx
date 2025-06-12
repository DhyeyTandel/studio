
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
                  Effective from Tuesday to Monday. Inclusive of accommodation, meals, consultations, and yoga therapy.
                  Special treatments may be extra. Minimum 6 nights stay. Prices per person.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-headline text-accent mb-3">General Information</h3>
                  <ul className="list-disc list-inside space-y-1.5 text-foreground/80 text-sm">
                    <li>The tariff is from Tuesday to Monday.</li>
                    <li>Inclusive of accommodation, meals, consultations, and yoga therapy charges.</li>
                    <li>A few personal and special treatments, however, are on a chargeable basis.</li>
                    <li>The minimum duration of stay is six (6) nights as Arogyadhama is result-oriented and committed to helping individuals achieve specific health and healing objectives.</li>
                    <li>The tariff mentioned is charged per person.</li>
                    <li>Bill Settlement is done one day before the discharge date.</li>
                    <li>Dormitory/Pushpa/Ashwini charges are mentioned per person.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-headline text-accent mb-4">Package Program Charges (INR)</h3>

                  <Card className="mb-4 bg-card/70 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold text-primary">General Wellness Package (Dormitory/Pushpa/Ashwini)</CardTitle>
                      <CardDescription className="text-xs">Includes food, lodging, yoga therapy, doctor consultation, and a yoga kit. Charges per person.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div><strong>1st Week (6 Nights):</strong><br /> ₹6,600</div>
                        <div><strong>2 Weeks:</strong><br /> ₹12,200</div>
                        <div><strong>3 Weeks:</strong><br /> ₹17,800</div>
                        <div><strong>4 Weeks:</strong><br /> ₹23,400</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-4 bg-card/70 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold text-primary">Naturopathy & Ayurveda - Category 1</CardTitle>
                      <CardDescription className="text-xs">Per week per person. Minimum 6 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div><strong>1 Week (6 Days):</strong><br /> ₹4,000</div>
                        <div><strong>2 Weeks:</strong><br /> ₹8,000</div>
                        <div><strong>3 Weeks:</strong><br /> ₹12,000</div>
                        <div><strong>4 Weeks:</strong><br /> ₹16,000</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-4 bg-card/70 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold text-primary">Naturopathy & Ayurveda - Category 2</CardTitle>
                      <CardDescription className="text-xs">Per week per person. Minimum 6 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div><strong>1 Week (6 Days):</strong><br /> ₹6,000</div>
                        <div><strong>2 Weeks:</strong><br /> ₹12,000</div>
                        <div><strong>3 Weeks:</strong><br /> ₹18,000</div>
                        <div><strong>4 Weeks:</strong><br /> ₹24,000</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mb-4 bg-card/70 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold text-primary">Physiotherapy & Acupuncture - Category 1</CardTitle>
                      <CardDescription className="text-xs">Per week per person. Minimum 6 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div><strong>1 Week (6 Days):</strong><br /> ₹3,000</div>
                        <div><strong>2 Weeks:</strong><br /> ₹6,000</div>
                        <div><strong>3 Weeks:</strong><br /> ₹9,000</div>
                        <div><strong>4 Weeks:</strong><br /> ₹12,000</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/70 border-primary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold text-primary">Physiotherapy & Acupuncture - Category 2</CardTitle>
                      <CardDescription className="text-xs">Per week per person. Minimum 6 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div><strong>1 Week (6 Days):</strong><br /> ₹4,000</div>
                        <div><strong>2 Weeks:</strong><br /> ₹8,000</div>
                        <div><strong>3 Weeks:</strong><br /> ₹12,000</div>
                        <div><strong>4 Weeks:</strong><br /> ₹16,000</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground text-xs italic mt-8">
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

