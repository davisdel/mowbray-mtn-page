import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ArrowRight, Home, Users, Leaf, Shield, Trees } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden text-primary-foreground'>
        <div
          className='absolute inset-0 animate-hero-zoom'
          style={{
            backgroundImage: `url('/IMG_6302-pond-ducks-hero-highres.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/20' />
        <div className='absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-black/15' />

        <div className='relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12'>
          <div className='max-w-3xl text-left'>
            <div className='mb-6 inline-flex animate-fade-up animation-fill-both items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md'>
              <Trees className='h-4 w-4 text-accent' />
              Life on Mowbray Mountain
            </div>
            <h1 className='animate-fade-up animation-fill-both text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl'>
              Elevated living,
              <span className='mt-2 block text-accent'>naturally.</span>
            </h1>
            <p className='mt-7 max-w-2xl animate-fade-up animation-fill-both text-lg leading-relaxed text-white/85 animate-delay-150 sm:text-xl md:text-2xl'>
              A quiet community of thoughtfully designed homes, spacious wooded
              sites, and gathering places nestled on Mowbray Mountain.
            </p>
            <div className='mt-9 flex animate-fade-up animation-fill-both flex-col gap-4 animate-delay-300 sm:flex-row'>
              <Button
                asChild
                size='lg'
                className='group h-14 rounded-full bg-accent px-7 text-base font-bold text-accent-foreground shadow-strong transition-all duration-300 hover:-translate-y-1 hover:bg-accent/90'
              >
                <NavLink to='/home-sites'>
                  Explore Available Homes
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </NavLink>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='h-14 rounded-full border-white/50 bg-white/10 px-7 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary'
              >
                <NavLink to='/amenities'>View Amenities</NavLink>
              </Button>
            </div>
          </div>

          <div className='mt-14 grid max-w-3xl animate-fade-up animation-fill-both grid-cols-1 gap-3 animate-delay-500 sm:grid-cols-3'>
            {[
              ['52', 'Wooded home sites'],
              ['2 acres', 'Community green space'],
              ['1 mile', 'Planned nature trail']
            ].map(([value, label]) => (
              <div key={label} className='glass-panel rounded-2xl px-5 py-4'>
                <div className='text-2xl font-bold text-accent'>{value}</div>
                <div className='mt-1 text-sm font-medium text-white/75'>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent' />
      </section>

      {/* Features Section */}
      <section className='relative overflow-hidden bg-subtle-gradient py-24'>
        <div className='absolute -left-32 top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl' />
        <div className='absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl' />
        <div className='container relative mx-auto px-6'>
          <div className='mx-auto mb-16 max-w-3xl text-center'>
            <span className='section-eyebrow'>
              The Coopers Creek difference
            </span>
            <h2 className='mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl'>
              Mountain calm. Modern comfort.
            </h2>
            <p className='mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
              Experience the perfect blend of thoughtful design, natural beauty,
              and a genuine sense of community.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            <Card className='group border border-primary/10 bg-card/90 text-left shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-medium'>
              <CardHeader>
                <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110'>
                  <Home className='h-6 w-6' />
                </div>
                <CardTitle className='text-xl'>Premium Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base leading-relaxed'>
                  Thoughtfully designed homes with modern architecture and
                  premium finishes throughout.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='group border border-primary/10 bg-card/90 text-left shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-medium'>
              <CardHeader>
                <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-soft transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110'>
                  <Users className='h-6 w-6' />
                </div>
                <CardTitle className='text-xl'>Vibrant Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base leading-relaxed'>
                  Join a welcoming future community with shared spaces and
                  activities for all ages.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='group border border-primary/10 bg-card/90 text-left shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-medium'>
              <CardHeader>
                <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110'>
                  <Leaf className='h-6 w-6' />
                </div>
                <CardTitle className='text-xl'>Green Living</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base leading-relaxed'>
                  Abundant green spaces, walking trails, and a landscape that
                  keeps nature close.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='group border border-primary/10 bg-card/90 text-left shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-medium'>
              <CardHeader>
                <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-soft transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110'>
                  <Shield className='h-6 w-6' />
                </div>
                <CardTitle className='text-xl'>Quiet & Peaceful</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base leading-relaxed'>
                  Enjoy the quiet comforts of Coopers Creek's natural mountain
                  setting.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='relative overflow-hidden bg-hero-gradient py-24 text-primary-foreground'>
        <div className='absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_25%),radial-gradient(circle_at_80%_80%,hsl(var(--accent))_0,transparent_30%)]' />
        <div className='container relative mx-auto px-6 text-center'>
          <span className='inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent backdrop-blur-sm'>
            Come see it for yourself
          </span>
          <h2 className='mt-6 text-4xl font-bold tracking-tight md:text-5xl'>
            Ready to make the mountain home?
          </h2>
          <p className='mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80'>
            Schedule a visit and experience the setting, the homes, and the
            community firsthand.
          </p>
          <div className='mt-9 flex flex-col justify-center gap-4 sm:flex-row'>
            <Button
              size='lg'
              className='h-14 rounded-full bg-accent px-8 text-base font-bold text-accent-foreground shadow-strong transition-all duration-300 hover:-translate-y-1 hover:bg-accent/90'
              href='https://kw.com/agent/Cheryl-Fuqua/119107'
            >
              Schedule a Visit
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='h-14 rounded-full border-white/40 bg-transparent px-8 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary'
            >
              <NavLink to='/location'>Get Directions</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
