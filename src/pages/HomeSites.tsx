import React, { useState } from 'react'
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
import {
  MapPin,
  Home,
  Bed,
  Bath,
  Square,
  Eye,
  ArrowBigDown,
  ArrowBigUp
} from 'lucide-react'

export default function HomeSitesPage() {
  const initialSites = [
    {
      id: 1,
      name: '3069 Poe Rd, Soddy Daisy, TN 37379',
      price: '$775,000',
      bedrooms: 4,
      bathrooms: 4,
      sqft: '2,932',
      lot: '1 acre',
      status: 'Available',
      url: 'https://www.zillow.com/homedetails/3069-Poe-Rd-Soddy-Daisy-TN-37379/444348372_zpid/',
      img: '99e64b41f7332d76914d3740b622a6f4-cc_ft_768.webp',
      contact: 'https://kw.com/agent/Cheryl-Fuqua/119107'
    },
    {
      id: 2,
      name: '3009 Poe Rd, Soddy Daisy, TN 37379',
      price: '$689,000',
      bedrooms: 4,
      bathrooms: 4,
      sqft: '2,503',
      lot: '1.07 acre',
      status: 'Contingent',
      url: 'https://www.zillow.com/homedetails/3009-Poe-Rd-Soddy-Daisy-TN-37379/442556057_zpid/',
      img: '9b2adec5b26d4ba610f61cb157d72a7a-cc_ft_768.webp',
      contact: 'https://kw.com/agent/Cheryl-Fuqua/119107'
    },
    {
      id: 3,
      name: '3075 Poe Rd, Soddy Daisy, TN 37379',
      price: '$90,000',
      lot: '1.17 acre',
      status: 'Available',
      url: 'https://www.zillow.com/homedetails/3075-Poe-Rd-Soddy-Daisy-TN-37379/449944369_zpid/',
      img: '167b51e4c6836708d02afe8fe7a312e0-cc_ft_768.webp',
      contact: 'https://kw.com/agent/Cheryl-Fuqua/119107'
    }
  ]
  const [sortMode, setSortMode] = useState<'asc' | 'desc' | '-'>('-')
  const [homeSites, setHomeSites] = useState(initialSites)

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
                <div className='h-[35rem] min-w-[90rem] md:min-w-0 rounded-lg flex items-center justify-center relative'>
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
              <Button
                variant='outline'
                size='sm'
                onClick={() => {
                  let nextMode: '-' | 'asc' | 'desc'
                  if (sortMode === '-') nextMode = 'asc'
                  else if (sortMode === 'asc') nextMode = 'desc'
                  else nextMode = '-'
                  setSortMode(nextMode)
                  if (nextMode === '-') {
                    setHomeSites([...initialSites])
                  } else {
                    setHomeSites((prev) => {
                      const sorted = [...prev].sort((a, b) => {
                        const priceA =
                          parseInt((a.price || '').replace(/[^\d]/g, '')) || 0
                        const priceB =
                          parseInt((b.price || '').replace(/[^\d]/g, '')) || 0
                        return nextMode === 'asc'
                          ? priceA - priceB
                          : priceB - priceA
                      })
                      return sorted
                    })
                  }
                }}>
                {sortMode === '-' && 'Sort by Price'}
                {sortMode === 'asc' && (
                  <span className='flex items-center gap-1'>
                    Price Low to High{' '}
                    <ArrowBigUp className='inline-block h-5 w-5 text-black' />
                  </span>
                )}
                {sortMode === 'desc' && (
                  <span className='flex items-center gap-1'>
                    Price High to Low{' '}
                    <ArrowBigDown className='inline-block h-5 w-5 text-black' />
                  </span>
                )}
              </Button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {homeSites.map((home) => (
              <Card
                key={home.id}
                className='shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group'>
                <div className='relative'>
                  {/* Home image card */}
                  <div className='w-full h-48 rounded-t-lg overflow-hidden flex items-center justify-center bg-gray-100'>
                    <img
                      src={
                        home.img.startsWith('http')
                          ? home.img
                          : `/${home.img}`
                      }
                      alt={home.name}
                      className='object-cover w-full h-full'
                    />
                  </div>
                  {/* Home info overlay */}
                  <div className='absolute top-3 right-3'>
                    <Badge className={getStatusColor(home.status)}>
                      {home.status}
                    </Badge>
                  </div>
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
                      <span>
                        {home.bedrooms ? `${home.bedrooms} Bedrooms` : 'N/A'}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Bath className='h-4 w-4 text-muted-foreground' />
                      <span>
                        {home.bathrooms ? `${home.bathrooms} Bathrooms` : 'N/A'}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Square className='h-4 w-4 text-muted-foreground' />
                      <span>{home.sqft ? `${home.sqft} sq ft` : 'N/A'}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <MapPin className='h-4 w-4 text-muted-foreground' />
                      <span>{home.lot}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className='flex gap-2 pt-4'>
                    <Button className='flex-1' href={home.url}>
                      <Eye className='h-4 w-4 mr-2' />
                      View Details
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      href={home.contact}>
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
