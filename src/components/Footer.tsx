import { Mail, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <footer className='bg-sidebar text-sidebar-foreground border-t border-sidebar-border'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Company Info */}
          <div className='flex flex-col md:items-center'>
            <div className='space-y-4'>
              <div>
                <h3 className='text-xl font-bold mb-2'>Coopers Creek</h3>
                <p className='text-sidebar-foreground/70 text-sm max-w-[250px]'>
                  Where luxury community living meets mountain peace and
                  serenity.
                </p>
              </div>
              <div className='w-16 h-16 bg-sidebar-primary rounded-lg flex items-center justify-center'>
                <span className='text-sidebar-primary-foreground font-bold text-xl'>
                  CC
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col md:items-center'>
            <div className='space-y-4'>
              <h4 className='text-lg font-semibold'>Quick Links</h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <NavLink
                    to='/'
                    className='text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/about'
                    className='text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors'>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/home-sites'
                    className='text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors'>
                    Available Homes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/amenities'
                    className='text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors'>
                    Amenities
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col md:items-center'>
            <div className='space-y-4'>
              <h4 className='text-lg font-semibold'>Contact</h4>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-center gap-2 text-sidebar-foreground/70'>
                  <Phone className='h-4 w-4' />
                  (423) 505-4880
                </li>
                <li className='flex items-center gap-2 text-sidebar-foreground/70'>
                  <Mail className='h-4 w-4' />
                  cheryl@cherylfuqua.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='border-t border-sidebar-border mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center text-sm text-sidebar-foreground/70'>
            <p>&copy; 2025 Coopers Creek. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
