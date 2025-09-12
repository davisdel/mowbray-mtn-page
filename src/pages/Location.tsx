import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  Navigation,
  Car,
  GraduationCap,
  ShoppingBag,
  Stethoscope,
  Plane,
  Train
} from 'lucide-react'

export default function LocationPage() {
  const nearbyAttractions = [
    {
      category: 'Education',
      icon: GraduationCap,
      places: [
        {
          name: 'Riverside Elementary School',
          distance: '0.8 miles',
          rating: '9/10'
        },
        {
          name: 'Community Middle School',
          distance: '1.2 miles',
          rating: '8/10'
        },
        { name: 'Heritage High School', distance: '2.1 miles', rating: '9/10' },
        { name: 'State University', distance: '8.5 miles', rating: 'Top Rated' }
      ]
    },
    {
      category: 'Shopping & Dining',
      icon: ShoppingBag,
      places: [
        {
          name: 'Village Shopping Center',
          distance: '1.5 miles',
          rating: '4.5★'
        },
        { name: 'Downtown District', distance: '3.2 miles', rating: '4.7★' },
        { name: 'Riverside Café', distance: '0.9 miles', rating: '4.6★' },
        { name: 'Premium Outlets', distance: '12 miles', rating: '4.4★' }
      ]
    },
    {
      category: 'Healthcare',
      icon: Stethoscope,
      places: [
        {
          name: 'Community Medical Center',
          distance: '2.8 miles',
          rating: '4.5★'
        },
        { name: 'Urgent Care Clinic', distance: '1.7 miles', rating: '4.3★' },
        {
          name: 'Riverside Family Practice',
          distance: '1.1 miles',
          rating: '4.6★'
        },
        { name: 'Regional Hospital', distance: '6.2 miles', rating: '4.7★' }
      ]
    }
  ]

  const transportationOptions = [
    {
      type: 'Highway Access',
      icon: Car,
      description: 'Direct access to I-75 and Highway 92',
      time: '2 minutes'
    },
    {
      type: 'Public Transit',
      icon: Train,
      description: 'Bus route with downtown connections',
      time: '15 minutes'
    },
    {
      type: 'Airport',
      icon: Plane,
      description: 'International Airport',
      time: '35 minutes'
    },
    {
      type: 'Train Station',
      icon: Train,
      description: 'Metro Rail System',
      time: '20 minutes'
    }
  ]

  return (
    <div className='min-h-screen py-12'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-foreground mb-6'>
            Prime Location
          </h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Perfectly positioned for convenience and accessibility. Enjoy easy
            access to top schools, shopping, dining, healthcare, and major
            transportation routes.
          </p>
        </div>

        {/* Interactive Map Section */}
        <section className='mb-16'>
          <Card className='shadow-strong'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2 text-2xl'>
                <MapPin className='h-7 w-7 text-primary' />
                Interactive Location Map
              </CardTitle>
              <CardDescription className='text-base'>
                Explore our neighborhood and nearby amenities with our
                interactive map
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='h-96 bg-subtle-gradient rounded-lg flex items-center justify-center relative overflow-hidden'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4206.659724158415!2d-85.27040432338849!3d35.286873672717206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88608d4e2608c497%3A0x8af8b7c1f23cf6ee!2s3009%20Poe%20Rd%2C%20Soddy-Daisy%2C%20TN%2037379!5e1!3m2!1sen!2sus!4v1753882328966!5m2!1sen!2sus'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  referrerPolicy='no-referrer-when-downgrade'></iframe>
              </div>

              {/* Quick Actions */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                <Button variant='outline' className='h-12' href='https://maps.google.com/maps?ll=35.286874,-85.267829&z=14&t=h&hl=en&gl=US&mapclient=embed&q=3009%20Poe%20Rd%20Soddy-Daisy%2C%20TN%2037379'>
                  <Navigation className='h-4 w-4 mr-2' />
                  Get Directions
                </Button>
                <Button variant='outline' className='h-12' href='https://maps.app.goo.gl/sAU7qj87178MJGoC9'>
                  <MapPin className='h-4 w-4 mr-2' />
                  Street View
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Address and Contact */}
        {/* <section className='mb-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <Card className='shadow-soft'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <MapPin className='h-6 w-6 text-primary' />
                  Our Address
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <p className='text-muted-foreground'>
                    3009 Poe Rd.
                    <br />
                    Soddy-Daisy, TN 37379
                    <br />
                    United States
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='shadow-soft'>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h4 className='font-semibold text-foreground mb-2'>
                    Hours of Operation
                  </h4>
                  <div className='space-y-1 text-sm'>
                    <div className='flex justify-between'>
                      <span>Monday - Friday</span>
                      <span className='font-medium'>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Saturday</span>
                      <span className='font-medium'>10:00 AM - 5:00 PM</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Sunday</span>
                      <span className='font-medium'>12:00 PM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
                <Button className='w-full'>Schedule Appointment</Button>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Transportation */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            Transportation & Accessibility
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {transportationOptions.map((option, index) => (
              <Card
                key={index}
                className='text-center shadow-soft hover:shadow-medium transition-all duration-300'>
                <CardHeader>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3'>
                    <option.icon className='h-6 w-6 text-primary' />
                  </div>
                  <CardTitle className='text-lg'>{option.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground mb-2'>
                    {option.description}
                  </p>
                  <div className='text-primary font-semibold'>
                    {option.time} away
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-8'>
            What's Nearby
          </h2>
          {nearbyAttractions.map((category, categoryIndex) => (
            <div key={categoryIndex} className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center'>
                  <category.icon className='h-5 w-5 text-accent' />
                </div>
                <h3 className='text-2xl font-semibold text-foreground'>
                  {category.category}
                </h3>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {category.places.map((place, placeIndex) => (
                  <Card
                    key={placeIndex}
                    className='shadow-soft hover:shadow-medium transition-all duration-300'>
                    <CardContent className='p-4'>
                      <h4 className='font-semibold text-foreground mb-2'>
                        {place.name}
                      </h4>
                      <div className='space-y-1 text-sm'>
                        <div className='flex items-center gap-2 text-muted-foreground'>
                          <Navigation className='h-3 w-3' />
                          <span>{place.distance}</span>
                        </div>
                        <div className='flex items-center gap-2 text-accent font-medium'>
                          <span>{place.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

      </div>
    </div>
  )
}
