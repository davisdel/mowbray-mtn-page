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

import { initialHomeSites, HomeSite } from '@/data/homeSites'

export default function HomeSitesPage() {
  const [sortMode, setSortMode] = useState<'asc' | 'desc' | '-'>('-')
  const [homeSites, setHomeSites] = useState<HomeSite[]>(initialHomeSites)
  const [highlightedId, setHighlightedId] = useState<number | null>(null)
  const cardRefs = React.useRef<Record<number, HTMLDivElement | null>>({})

  // Callback for map click
  const handleMapClick = (id: number) => {
    setHighlightedId(id)
    setTimeout(() => {
      const ref = cardRefs.current[id]
      if (ref) {
        ref.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 200)
    setTimeout(() => {
      setHighlightedId(null)
    }, 5000)
  }
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-accent text-accent-foreground'
      case 'Coming Soon':
        return 'bg-primary text-primary-foreground'
      case 'Pending':
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
              <CardTitle className='flex items-center gap-2 justify-center text-center'>
                <MapPin className='h-6 w-6 text-primary' />
                Interactive Community Map
              </CardTitle>
              <CardDescription className='text-center'>
                Click on any home site marker to view details and availability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='overflow-x-auto'>
                <div className='h-[35rem] min-w-[90rem] md:min-w-0 rounded-lg flex items-center justify-center relative'>
                  {/* Map component above background */}
                  <div className='relative z-10 w-full h-full flex items-center justify-center'>
                    <Map
                      onSiteClick={handleMapClick}
                      siteStatusList={homeSites.map((site) => ({
                        id: site.id,
                        status: site.status.toLowerCase() as
                          | 'available'
                          | 'sold'
                          | 'pending'
                          | 'coming soon'
                          | 'lot'
                      }))}
                    />
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
                    setHomeSites([...initialHomeSites])
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
            {homeSites
              .filter((home) => !!home.url)
              .map((home) => (
                <Card
                  key={home.id}
                  ref={(el) => (cardRefs.current[home.id] = el)}
                  className={`shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group ${highlightedId === home.id ? 'ring-4 ring-primary' : ''}`}>
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
                          {home.bathrooms
                            ? `${home.bathrooms} Bathrooms`
                            : 'N/A'}
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
                      <Button variant='outline' size='sm' href={home.contact}>
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
              href='https://kw.com/agent/Cheryl-Fuqua/119107'
              size='lg'
              className='bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold shadow-strong'>
              Contact Sales Team
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
