import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t border-sidebar-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Coopers Creek</h3>
              <p className="text-sidebar-foreground/70 text-sm">
                Your premier destination for luxury community living and real estate excellence.
              </p>
            </div>
            <div className="w-16 h-16 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <span className="text-sidebar-primary-foreground font-bold text-xl">CP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/home-sites" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Available Homes
                </NavLink>
              </li>
              <li>
                <NavLink to="/amenities" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                  Amenities
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-sidebar-foreground/70">
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sidebar-foreground/70">
                <Mail className="h-4 w-4" />
                info@communityplace.com
              </li>
              <li className="flex items-center gap-2 text-sidebar-foreground/70">
                <MapPin className="h-4 w-4" />
                123 Community Ave, City, ST 12345
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-sidebar-accent rounded-lg flex items-center justify-center text-sidebar-accent-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-sidebar-accent rounded-lg flex items-center justify-center text-sidebar-accent-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-all duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-sidebar-accent rounded-lg flex items-center justify-center text-sidebar-accent-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sidebar-foreground/70">
            <p>&copy; 2025 Coopers Creek. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}