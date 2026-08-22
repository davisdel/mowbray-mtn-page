import { useState } from 'react'
import {
  Home,
  Info,
  MapPin,
  Building,
  Navigation,
  Menu,
  X,
  Trees
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navigationItems = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'About', url: '/about', icon: Info },
  { title: 'Home Sites', url: '/home-sites', icon: MapPin },
  { title: 'Amenities', url: '/amenities', icon: Building },
  { title: 'Location', url: '/location', icon: Navigation }
]

export function AppTopbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <nav className='sticky top-0 z-50 border-b border-white/10 bg-primary/95 text-primary-foreground shadow-medium backdrop-blur-xl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <NavLink
              to='/'
              className='group flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            >
              <span className='flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 bg-accent/15 transition-all duration-300 group-hover:rotate-6 group-hover:bg-accent/25'>
                <Trees className='h-5 w-5 text-accent' />
              </span>
              <span>
                <span className='block text-lg font-bold leading-none tracking-wide'>
                  Coopers Creek
                </span>
                <span className='mt-1 block text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/60'>
                  Mowbray Mountain
                </span>
              </span>
            </NavLink>
          </div>

          {/* Navigation */}
          <div className='hidden md:block'>
            <div className='flex items-center gap-1 rounded-full border border-white/10 bg-black/10 p-1.5'>
              {navigationItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.url}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-accent text-accent-foreground shadow-soft'
                        : 'text-primary-foreground/75 hover:bg-white/10 hover:text-primary-foreground'
                    }`
                  }
                >
                  <item.icon className='h-4 w-4' />
                  <span>{item.title}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={
                isMobileMenuOpen ? 'Close navigation' : 'Open navigation'
              }
              aria-expanded={isMobileMenuOpen}
              className='rounded-full border border-white/15 bg-white/10 p-2.5 text-primary-foreground transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            >
              {isMobileMenuOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <Menu className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className='animate-fade-in border-t border-white/10 bg-primary/95 md:hidden'>
          <div className='space-y-1 px-4 py-4'>
            {navigationItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                end
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-accent text-accent-foreground shadow-soft'
                      : 'text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground'
                  }`
                }
              >
                <item.icon className='h-4 w-4' />
                <span>{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
