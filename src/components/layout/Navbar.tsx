import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, User, LogOut, LayoutDashboard } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { useAuth } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, openLoginModal, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setProfileDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Image Converter', path: '/image-converter' },
    { name: 'JPG to PDF', path: '/jpg-to-pdf' },
    { name: 'PNG to JPG', path: '/png-to-jpg' },
    { name: 'JPG to PNG', path: '/jpg-to-png' },
    { name: 'PNG to PDF', path: '/png-to-pdf' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToConverter = () => {
    const elem = document.getElementById('converter-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with User's custom image */}
          <BrandLogo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Login & Convert */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdown(!profileDropdown)}
                  className="flex items-center gap-2.5 p-1.5 pr-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full transition-all"
                >
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="w-8 h-8 rounded-full border border-emerald-500/30"
                  />
                  <div className="text-left leading-tight hidden xl:block">
                    <p className="text-xs font-bold text-slate-900 truncate max-w-[100px]">
                      {user.name}
                    </p>
                    <p className="text-[10px] text-emerald-600 font-semibold">
                      Free User
                    </p>
                  </div>
                </button>

                {profileDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 text-xs animate-slide-up z-50">
                    <div className="px-3 py-2 border-b border-slate-100">
                      <p className="font-bold text-slate-900">{user.name}</p>
                      <p className="text-slate-500 text-[11px] truncate">{user.email}</p>
                    </div>

                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-emerald-600 font-medium transition-colors mt-1"
                    >
                      <LayoutDashboard className="w-4 h-4 text-emerald-600" />
                      <span>User Dashboard</span>
                    </Link>

                    <button
                      onClick={() => {
                        logout();
                        setProfileDropdown(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 font-medium transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={openLoginModal}
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 px-3.5 py-2 rounded-xl transition-colors"
              >
                <User className="w-3.5 h-3.5 text-emerald-600" />
                <span>Login with Gmail</span>
              </button>
            )}

            {location.pathname === '/' ? (
              <button
                onClick={scrollToConverter}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                Start Converting
              </button>
            ) : (
              <Link
                to="/jpg-to-pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                Start Converting
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {!isAuthenticated && (
              <button
                onClick={openLoginModal}
                className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1.5 rounded-lg"
              >
                Login
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fade-in">
          {isAuthenticated && user && (
            <div className="p-3 bg-slate-50 rounded-xl mb-3 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={user.avatarUrl} alt={user.name} className="w-8 h-8 rounded-full" />
                <div>
                  <p className="text-xs font-bold text-slate-900">{user.name}</p>
                  <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
                </div>
              </div>
              <Link
                to="/dashboard"
                className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
              >
                Dashboard
              </Link>
            </div>
          )}

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            {!isAuthenticated ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  openLoginModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 rounded-xl text-sm"
              >
                <User className="w-4 h-4 text-emerald-600" />
                Login with Gmail
              </button>
            ) : (
              <button
                onClick={logout}
                className="w-full flex items-center justify-center gap-2 bg-rose-50 text-rose-700 font-bold py-2.5 rounded-xl text-sm"
              >
                <LogOut className="w-4 h-4" />
                Log Out
              </button>
            )}

            <Link
              to="/jpg-to-pdf"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 rounded-xl shadow-md text-center text-sm"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              Start Converting Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
