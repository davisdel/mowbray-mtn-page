import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppTopbar } from './components/AppTopbar'
import { Footer } from './components/Footer'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import PhotosPage from './pages/Photos'
import HomeSitesPage from './pages/HomeSites'
import AmenitiesPage from './pages/Amenities'
import LocationPage from './pages/Location'
import NotFound from './pages/NotFound'
import Scroll from './components/Scroll'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Scroll />
        <div className='min-h-screen flex flex-col'>
          {/* Top Navigation */}
          <AppTopbar />

          {/* Main Content */}
          <main className='flex-1'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/home-sites' element={<HomeSitesPage />} />
              <Route path='/amenities' element={<AmenitiesPage />} />
              <Route path='/location' element={<LocationPage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
