import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Home, Users, Leaf, Shield } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center text-primary-foreground overflow-hidden'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url('/src/images/IMG_2570.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className='absolute inset-0 bg-black/30'></div>
        <div className='relative z-10 text-center max-w-4xl mx-auto px-6'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 animate-fade-in'>
            Welcome to Your
            <span className='block bg-accent-gradient bg-clip-text text-transparent'>
              Dream Community
            </span>
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto'>
            Discover luxury living in a vibrant community designed for modern
            families. Where comfort meets elegance, and neighbors become family.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold shadow-strong'>
              <NavLink to='/home-sites'>Explore Available Homes</NavLink>
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-primary-foreground text-primary hover:bg-primary-foreground px-8 py-6 text-lg font-semibold'>
              <NavLink to='/amenities'>View Amenities</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-subtle-gradient'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-foreground mb-4'>
              Why Choose Coopers Creek?
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Experience the perfect blend of modern amenities, natural beauty,
              and community spirit.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Card className='text-center border-0 bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2'>
              <CardHeader>
                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Home className='h-8 w-8 text-primary' />
                </div>
                <CardTitle className='text-xl'>Premium Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base'>
                  Thoughtfully designed homes with modern architecture and
                  premium finishes throughout.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='text-center border-0 bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2'>
              <CardHeader>
                <div className='w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Users className='h-8 w-8 text-accent' />
                </div>
                <CardTitle className='text-xl'>Vibrant Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base'>
                  Join a welcoming community with regular events, activities,
                  and shared spaces for all ages.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='text-center border-0 bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2'>
              <CardHeader>
                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Leaf className='h-8 w-8 text-primary' />
                </div>
                <CardTitle className='text-xl'>Green Living</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base'>
                  Sustainable design with abundant green spaces, walking trails,
                  and eco-friendly features.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='text-center border-0 bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2'>
              <CardHeader>
                <div className='w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Shield className='h-8 w-8 text-accent' />
                </div>
                <CardTitle className='text-xl'>Safe & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base'>
                  24/7 security, gated access, and well-lit pathways ensure
                  peace of mind for your family.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 bg-primary text-primary-foreground'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Ready to Make This Home?</h2>
          <p className='text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto'>
            Schedule a visit today and experience the lifestyle you've been
            dreaming of.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold shadow-strong'>
              Schedule a Visit
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold'>
              <NavLink to='/location'>Get Directions</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
