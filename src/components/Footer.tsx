import { Mail, MapPin, Phone, Trees } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <footer className='relative overflow-hidden border-t border-sidebar-border bg-sidebar text-sidebar-foreground'>
      <div className='absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sidebar-primary/10 blur-3xl' />
      <div className='container relative mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
          {/* Company Info */}
          <div>
            <div className='space-y-5'>
              <div className='flex items-center gap-3'>
                <span className='flex h-12 w-12 items-center justify-center rounded-full border border-sidebar-primary/35 bg-sidebar-primary/10'>
                  <Trees className='h-5 w-5 text-sidebar-primary' />
                </span>
                <div>
                  <h3 className='text-xl font-bold leading-none'>
                    Coopers Creek
                  </h3>
                  <p className='mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-sidebar-foreground/50'>
                    Mowbray Mountain
                  </p>
                </div>
              </div>
              <div>
                <p className='max-w-xs text-sm leading-relaxed text-sidebar-foreground/65'>
                  Where luxury community living meets mountain peace and
                  serenity.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='md:justify-self-center'>
            <div className='space-y-4'>
              <h4 className='text-sm font-bold uppercase tracking-[0.18em] text-sidebar-primary'>
                Explore
              </h4>
              <ul className='space-y-3 text-sm'>
                <li>
                  <NavLink
                    to='/'
                    className='text-sidebar-foreground/65 transition-colors hover:text-sidebar-primary'
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/about'
                    className='text-sidebar-foreground/65 transition-colors hover:text-sidebar-primary'
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/home-sites'
                    className='text-sidebar-foreground/65 transition-colors hover:text-sidebar-primary'
                  >
                    Available Homes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/amenities'
                    className='text-sidebar-foreground/65 transition-colors hover:text-sidebar-primary'
                  >
                    Amenities
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className='md:justify-self-end'>
            <div className='space-y-4'>
              <h4 className='text-sm font-bold uppercase tracking-[0.18em] text-sidebar-primary'>
                Contact
              </h4>
              <ul className='space-y-3 text-sm'>
                <li className='flex items-center gap-3 text-sidebar-foreground/65'>
                  <Phone className='h-4 w-4 text-sidebar-primary' />
                  <a
                    href='tel:4235054880'
                    className='transition-colors hover:text-sidebar-primary'
                  >
                    (423) 505-4880
                  </a>
                </li>
                <li className='flex items-center gap-3 text-sidebar-foreground/65'>
                  <Mail className='h-4 w-4 text-sidebar-primary' />
                  <a
                    href='mailto:cheryl@cherylfuqua.com'
                    className='transition-colors hover:text-sidebar-primary'
                  >
                    cheryl@cherylfuqua.com
                  </a>
                </li>
                <li className='flex items-start gap-3 text-sidebar-foreground/65'>
                  <MapPin className='mt-0.5 h-4 w-4 shrink-0 text-sidebar-primary' />
                  <span>Mowbray Mountain, Soddy-Daisy, Tennessee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-sidebar-border pt-7'>
          <div className='flex flex-col items-center justify-between gap-3 text-xs text-sidebar-foreground/45 md:flex-row'>
            <p>
              &copy; {new Date().getFullYear()} Coopers Creek. All rights
              reserved.
            </p>
            <p>Mountain living, thoughtfully designed.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
