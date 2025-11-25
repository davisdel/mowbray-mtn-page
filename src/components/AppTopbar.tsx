import { useState } from 'react'
import { Home, Info, Camera, MapPin, Building, Navigation } from 'lucide-react'
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
    <nav className='bg-primary border-b border-border shadow-soft'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <NavLink to='/' className='focus:outline-none'>
              <h1 className='text-xl font-bold text-primary-foreground'>
                Coopers Creek
              </h1>
            </NavLink>
          </div>

          {/* Navigation */}
          <div className='hidden md:block'>
            <div className='flex items-center space-x-1'>
              {navigationItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.url}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary-glow text-primary-foreground shadow-medium'
                        : 'text-primary-foreground/80 hover:bg-primary-glow/20 hover:text-primary-foreground'
                    }`
                  }>
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
              className='text-primary-foreground hover:text-primary-foreground/80 focus:outline-none'>
              {isMobileMenuOpen ? (
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 bg-primary border-t border-primary-glow/20'>
            {navigationItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                end
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-glow text-primary-foreground shadow-medium'
                      : 'text-primary-foreground/80 hover:bg-primary-glow/20 hover:text-primary-foreground'
                  }`
                }>
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
