import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SubdivisionMap as Map } from '@/components/ui/map'
import { MapPin, Home, Bed, Bath, Square, Eye } from 'lucide-react'

export default function HomeSitesPage() {
  const homeSites = [
    {
      id: 1,
      name: 'The Grandview',
      price: '$485,000',
      bedrooms: 4,
      bathrooms: 3,
      sqft: '2,850',
      lot: '0.25 acres',
      status: 'Available',
      features: [
        'Master Suite',
        'Open Floor Plan',
        '2-Car Garage',
        'Covered Patio'
      ]
    },
    {
      id: 2,
      name: 'The Willow',
      price: '$425,000',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: '2,400',
      lot: '0.20 acres',
      status: 'Available',
      features: [
        'Split Bedroom Plan',
        'Island Kitchen',
        'Study Nook',
        'Fenced Yard'
      ]
    },
    {
      id: 3,
      name: 'The Sterling',
      price: '$565,000',
      bedrooms: 5,
      bathrooms: 4,
      sqft: '3,200',
      lot: '0.30 acres',
      status: 'Coming Soon',
      features: [
        'Bonus Room',
        'Dual Master Suites',
        '3-Car Garage',
        'Outdoor Kitchen'
      ]
    },
    {
      id: 4,
      name: 'The Heritage',
      price: '$395,000',
      bedrooms: 3,
      bathrooms: 2,
      sqft: '2,100',
      lot: '0.18 acres',
      status: 'Available',
      features: [
        'First Floor Master',
        'Vaulted Ceilings',
        'Corner Lot',
        'Garden Space'
      ]
    },
    {
      id: 5,
      name: 'The Ashwood',
      price: '$525,000',
      bedrooms: 4,
      bathrooms: 3.5,
      sqft: '2,950',
      lot: '0.28 acres',
      status: 'Reserved',
      features: [
        'Home Office',
        "Butler's Pantry",
        'Mudroom',
        'Covered Front Porch'
      ]
    },
    {
      id: 6,
      name: 'The Meadowbrook',
      price: '$445,000',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: '2,600',
      lot: '0.22 acres',
      status: 'Available',
      features: ['Great Room', 'Walk-in Pantry', 'Laundry Room', 'Deck']
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-accent text-accent-foreground'
      case 'Coming Soon':
        return 'bg-primary text-primary-foreground'
      case 'Reserved':
        return 'bg-muted text-muted-foreground'
      default:
        return 'bg-secondary text-secondary-foreground'
    }
  }

  return (
    <div className='min-h-screen py-12'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-foreground mb-6'>
            Available Home Sites
          </h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Discover your perfect home in our thoughtfully planned community.
            Each residence features quality construction, modern amenities, and
            access to all community facilities.
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <section className='mb-16 overflow-y-auto'>
          <Card className='shadow-medium'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <MapPin className='h-6 w-6 text-primary' />
                Interactive Community Map
              </CardTitle>
              <CardDescription>
                Click on any home site marker to view details and availability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='overflow-x-auto'>
                <div className='h-[35rem] min-w-[70rem] md:min-w-0 rounded-lg flex items-center justify-center relative'>
                  {/* Background image behind the map */}
                  <div
                    className='absolute inset-0 w-full h-full z-0 bg-center bg-cover bg-no-repeat pointer-events-none'
                    style={{ backgroundImage: "url('/mapbackground (2).png')" }}
                  />
                  {/* Map component above background */}
                  <div className='relative z-10 w-full h-full flex items-center justify-center'>
                    <Map />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Home Listings */}
        <section className='mb-16'>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold text-foreground'>
              Available Homes
            </h2>
            <div className='flex gap-2'>
              <Button variant='outline' size='sm'>
                Filter
              </Button>
              <Button variant='outline' size='sm'>
                Sort by Price
              </Button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {homeSites.map((home) => (
              <Card
                key={home.id}
                className='shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group'>
                <div className='relative'>
                  <div className='h-48 bg-subtle-gradient flex items-center justify-center'>
                    <div className='text-center text-muted-foreground group-hover:text-primary transition-colors'>
                      <Home className='h-12 w-12 mx-auto mb-2' />
                      <span className='font-medium'>{home.name}</span>
                    </div>
                  </div>
                  <Badge
                    className={`absolute top-3 right-3 ${getStatusColor(home.status)}`}>
                    {home.status}
                  </Badge>
                </div>

                <CardHeader>
                  <div className='flex justify-between items-start'>
                    <div>
                      <CardTitle className='text-xl'>{home.name}</CardTitle>
                      <CardDescription className='text-2xl font-bold text-primary mt-1'>
                        {home.price}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className='space-y-4'>
                  {/* Home Stats */}
                  <div className='grid grid-cols-2 gap-4 text-sm'>
                    <div className='flex items-center gap-2'>
                      <Bed className='h-4 w-4 text-muted-foreground' />
                      <span>{home.bedrooms} Bedrooms</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Bath className='h-4 w-4 text-muted-foreground' />
                      <span>{home.bathrooms} Bathrooms</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Square className='h-4 w-4 text-muted-foreground' />
                      <span>{home.sqft} sq ft</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <MapPin className='h-4 w-4 text-muted-foreground' />
                      <span>{home.lot}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className='font-semibold text-sm text-foreground mb-2'>
                      Key Features:
                    </h4>
                    <div className='flex flex-wrap gap-1'>
                      {home.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant='secondary'
                          className='text-xs'>
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className='flex gap-2 pt-4'>
                    <Button
                      className='flex-1'
                      disabled={home.status === 'Reserved'}>
                      <Eye className='h-4 w-4 mr-2' />
                      View Details
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      disabled={home.status === 'Reserved'}>
                      Schedule Tour
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className='bg-primary text-primary-foreground rounded-2xl p-12 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Find Your Perfect Home</h2>
          <p className='text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto'>
            Our sales team is ready to help you explore floor plans, discuss
            financing options, and schedule private tours of available homes.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold shadow-strong'>
              Contact Sales Team
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold'>
              Download Floor Plans
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
