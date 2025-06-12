
import PageHeader from '@/components/shared/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Receipt, IndianRupee, Globe } from 'lucide-react';

interface TariffPackage {
  name: string;
  days: string;
  charges: (number | string)[];
  bulletColor: 'red' | 'green' | 'blue' | 'yellow';
}

interface TariffTableProps {
  title: string;
  packages: TariffPackage[];
  bookNowLink?: string;
}

const TariffTable: React.FC<TariffTableProps> = ({ title, packages, bookNowLink = "/health-packages/book-now" }) => {
  const getBulletColorClass = (color: string) => {
    switch (color) {
      case 'red': return 'bg-red-500';
      case 'green': return 'bg-green-500';
      case 'blue': return 'bg-blue-500';
      case 'yellow': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="mb-10 shadow-lg rounded-lg overflow-hidden border border-primary/20">
      <div className="flex justify-between items-center bg-primary text-primary-foreground p-3">
        <h4 className="text-md sm:text-lg font-semibold">{title}</h4>
        <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm px-2 sm:px-3">
          <Link href={bookNowLink}>Book Now</Link>
        </Button>
      </div>
      
      <div className="text-xs sm:text-sm overflow-x-auto">
        {/* Header Row */}
        <div className="grid grid-cols-[minmax(200px,_2fr)_minmax(60px,_auto)_repeat(4,_minmax(80px,_1fr))] bg-muted/70 font-semibold border-b border-primary/20 whitespace-nowrap">
          <div className="p-2 border-r border-primary/20">Packages / Programs</div>
          <div className="p-2 border-r border-primary/20 text-center">Day's</div>
          <div className="p-2 border-r border-primary/20 text-center">1st Week in INR</div>
          <div className="p-2 border-r border-primary/20 text-center">2 Week's in INR</div>
          <div className="p-2 border-r border-primary/20 text-center">3 Week's in INR</div>
          <div className="p-2 text-center">4 Week's in INR</div>
        </div>

        {/* Package Rows */}
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-[minmax(200px,_2fr)_minmax(60px,_auto)_repeat(4,_minmax(80px,_1fr))] items-start sm:items-center 
                        ${index < packages.length - 1 ? 'border-b border-primary/10' : ''} 
                        ${index % 2 === 0 ? 'bg-background' : 'bg-card/30'}`}
          >
            <div className={`p-2 border-r border-primary/10 flex items-start sm:items-center`}>
              <span className={`mr-2 mt-1 sm:mt-0 w-2 h-2 rounded-full flex-shrink-0 ${getBulletColorClass(pkg.bulletColor)}`}></span>
              <span>{pkg.name}</span>
            </div>
            <div className="p-2 border-r border-primary/10 text-center whitespace-nowrap">{pkg.days}</div>
            <div className="p-2 border-r border-primary/10 text-center">{pkg.charges[0]}</div>
            <div className="p-2 border-r border-primary/10 text-center">{pkg.charges[1]}</div>
            <div className="p-2 border-r border-primary/10 text-center">{pkg.charges[2]}</div>
            <div className="p-2 text-center">{pkg.charges[3]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const dormitoryPackages: TariffPackage[] = [
  { name: "including food, lodging, and yoga therapy Doctor consultation Also included is a yoga kit", days: "6 Night's", charges: [6600, 12200, 17800, 23400], bulletColor: 'red' },
  { name: "Naturopathy, Ayurveda, Per week per person / Category 1", days: "6 Day's", charges: [4000, 8000, 12000, 16000], bulletColor: 'green' },
  { name: "Naturopathy, Ayurveda, Per week per person / Category 2", days: "6 Day's", charges: [6000, 12000, 18000, 24000], bulletColor: 'green' },
  { name: "Physiotherapy, Acupuncture, per week per person / Category 1", days: "6 Day's", charges: [3000, 6000, 9000, 12000], bulletColor: 'blue' },
  { name: "Physiotherapy, Acupuncture, per week per person / Category 2", days: "6 Day's", charges: [4000, 8000, 12000, 16000], bulletColor: 'yellow' },
];

const singleAshirwadPackages: TariffPackage[] = [
  { name: "including food, lodging, and yoga therapy Doctor consultation Also included is a yoga kit", days: "6 Night's", charges: [13200, 25400, 37600, 49800], bulletColor: 'red' },
  { name: "Naturopathy, Ayurveda, Per week per person / Category 1", days: "6 Day's", charges: [4000, 8000, 12000, 16000], bulletColor: 'green' },
  { name: "Naturopathy, Ayurveda, Per week per person / Category 2", days: "6 Day's", charges: [6000, 12000, 18000, 24000], bulletColor: 'green' },
  { name: "Physiotherapy, Acupuncture, per week per person / Category 1", days: "6 Day's", charges: [3000, 6000, 9000, 12000], bulletColor: 'blue' },
  { name: "Physiotherapy, Acupuncture, per week per person / Category 2", days: "6 Day's", charges: [4000, 8000, 12000, 16000], bulletColor: 'yellow' },
];

const doubleSharingMaitriPackages: TariffPackage[] = [
  { name: "including food, lodging, and yoga therapy Doctor consultation Also included is a yoga kit", days: "6 Night's", charges: [11000, 21000, 31000, 41000], bulletColor: 'red' },
  { name: "Naturopathy, Ayurveda, Per week per person / Category 1", days: "6 Day's", charges: [4000, 8000, 12000, 16000], bulletColor: 'green' },
  { name: "Naturopathy, Ayurveda, Per week per person / Category 2", days: "6 Day's", charges: [6000, 12000, 18000, 24000], bulletColor: 'green' },
  { name: "Physiotherapy, Acupuncture, per week per person / Category 1", days: "6 Day's", charges: [3000, 6000, 9000, 12000], bulletColor: 'blue' },
  { name: "Physiotherapy, Acupuncture, per week per person / Category 2", days: "6 Day's", charges: [4000, 8000, 12000, 16000], bulletColor: 'yellow' },
];

const singleDeluxeSheshadriBhavanPackages: TariffPackage[] = [
  { name: "including food, lodging, and yoga therapy Doctor consultation Also included is a yoga kit", days: "6 Night's", charges: [27500, 54000, 80500, 107000], bulletColor: 'red' },
  { name: "Naturopathy, Ayurveda, Per week per person / Category 1", days: "6 Day's", charges: [4000, 8000, 12000, 16000], bulletColor: 'green' },
  { name: "Naturopathy, Ayurveda, Per week per person / Category 2", days: "6 Day's", charges: [6000, 12000, 18000, 24000], bulletColor: 'green' },
  { name: "Physiotherapy, Acupuncture, per week per person / Category 1", days: "6 Day's", charges: [3000, 6000, 9000, 12000], bulletColor: 'blue' },
  { name: "Physiotherapy, Acupuncture, per week per person / Category 2", days: "6 Day's", charges: [4000, 8000, 12000, 16000], bulletColor: 'yellow' },
];


export default function TariffPage() {
  const sharingNote = "Double or Triple Sharing is applicable only when you come with your sharing partner ( Sharing is not decided from the Institute) or Pay the charges by your self";
  return (
    <div className="space-y-12">
      <PageHeader
        title="Our Health Package Tariffs"
        subtitle="Find detailed pricing information for our health packages, with options for Indian and International guests."
        Icon={Receipt}
      />

      <section className="max-w-6xl mx-auto"> {/* Increased max-width for wider tables */}
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
            <div className="space-y-6">
              <div>
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-headline text-primary flex items-center">
                    <IndianRupee className="mr-2 h-6 w-6" />
                    Tariffs for Indian Nationals
                  </CardTitle>
                  <CardDescription>
                    Effective from Tuesday to Monday. Inclusive of accommodation, meals, consultations, and yoga therapy.
                    Special treatments may be extra. Minimum 6 nights stay. Prices per person.
                  </CardDescription>
                </CardHeader>
                <ul className="list-disc list-inside space-y-1.5 text-foreground/80 text-sm mb-8 bg-card/30 p-4 rounded-md">
                  <li>The tariff is from Tuesday to Monday.</li>
                  <li>Inclusive of accommodation, meals, consultations, and yoga therapy charges.</li>
                  <li>A few personal and special treatments, however, are on a chargeable basis.</li>
                  <li>The minimum duration of stay is six (6) nights as Arogyadhama is result-oriented and committed to helping individuals achieve specific health and healing objectives.</li>
                  <li>The tariff mentioned is charged per person.</li>
                  <li>Bill Settlement is done one day before the discharge date.</li>
                  <li>Dormitory/Pushpa/Ashwini charges are mentioned per person.</li>
                </ul>
              </div>

              <TariffTable title="Dormitory/ Pushpa/Ashwini - Charges mentioned per person" packages={dormitoryPackages} />
              <TariffTable title="Single/ Ashirwad - Charges mentioned per person" packages={singleAshirwadPackages} />
              
              <p className="text-foreground/80 text-sm mb-4">{sharingNote}</p>
              <TariffTable title="Double Sharing / Maitri - Charges mentioned per person" packages={doubleSharingMaitriPackages} />
              <TariffTable title="Single Deluxe / Sheshadri Bhavan - Charges mentioned per person" packages={singleDeluxeSheshadriBhavanPackages} />
              <p className="text-foreground/80 text-sm mt-4 mb-8">{sharingNote}</p>
              
              <p className="text-muted-foreground text-xs italic mt-8 text-center">
                Please contact us for the most up-to-date information and for any custom package inquiries.
              </p>
            </div>
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
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow transition-colors">
            <Link href="/health-packages/book-now">Book a Package</Link>
          </Button>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow transition-colors">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
