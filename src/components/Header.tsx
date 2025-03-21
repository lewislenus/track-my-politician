
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out py-4",
        scrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-lg">GPA</span>
          </div>
          <span className="font-display font-medium text-lg hidden sm:inline-block">
            GhanaPolitics
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              cn("text-sm font-medium transition-colors hover:text-primary", 
                isActive ? "text-primary" : "text-foreground/80")
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/politicians" 
            className={({ isActive }) => 
              cn("text-sm font-medium transition-colors hover:text-primary", 
                isActive ? "text-primary" : "text-foreground/80")
            }
          >
            Politicians
          </NavLink>
          <NavLink 
            to="/promises" 
            className={({ isActive }) => 
              cn("text-sm font-medium transition-colors hover:text-primary", 
                isActive ? "text-primary" : "text-foreground/80")
            }
          >
            Promises
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              cn("text-sm font-medium transition-colors hover:text-primary", 
                isActive ? "text-primary" : "text-foreground/80")
            }
          >
            Dashboard
          </NavLink>
        </nav>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="group" onClick={() => console.log('Sign up clicked')}>
            <span className="transition-transform group-hover:translate-x-0.5">Sign Up</span>
          </Button>
          <Button size="sm" className="transition-transform hover:-translate-y-0.5" onClick={() => console.log('Login clicked')}>
            <User className="mr-2 h-4 w-4" />
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-sm animate-fade-in md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                cn("text-lg font-medium transition-colors hover:text-primary", 
                  isActive ? "text-primary" : "text-foreground/80")
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/politicians" 
              className={({ isActive }) => 
                cn("text-lg font-medium transition-colors hover:text-primary", 
                  isActive ? "text-primary" : "text-foreground/80")
              }
            >
              Politicians
            </NavLink>
            <NavLink 
              to="/promises" 
              className={({ isActive }) => 
                cn("text-lg font-medium transition-colors hover:text-primary", 
                  isActive ? "text-primary" : "text-foreground/80")
              }
            >
              Promises
            </NavLink>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                cn("text-lg font-medium transition-colors hover:text-primary", 
                  isActive ? "text-primary" : "text-foreground/80")
              }
            >
              Dashboard
            </NavLink>
            <div className="flex flex-col space-y-4 mt-8">
              <Button size="lg" className="w-64 transition-transform hover:-translate-y-0.5" onClick={() => console.log('Login clicked')}>
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button variant="outline" size="lg" className="w-64" onClick={() => console.log('Sign up clicked')}>
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
