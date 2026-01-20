import { Menu, X, Phone, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const contactInfo = {
    phone: '8 (9021) 66-80-03',
    email: 'info@biletavto.ru'
  };

  const menuItems = [
    { label: 'Расписание', path: '/' },
    { label: 'Оплата', path: '/' },
    { label: 'Вернуть билет', path: '/' },
    { label: 'Служба поддержки', path: '/' }
  ];

  const userName = 'Иван Иванов';
  const isAccountPage = location.pathname.startsWith('/account');

  return (
    <>
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center gap-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/лого.jpg" alt="БилетАвто" className="h-16 sm:h-20" />
            </Link>

            <nav className="hidden lg:flex flex-wrap justify-center gap-6 text-sm">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-primary hover:text-light transition-colors font-medium whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {isAccountPage ? (
                <div className="flex items-center gap-2 bg-light text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm">
                  <User className="w-4 h-4" />
                  <span className="hidden md:inline">{userName}</span>
                </div>
              ) : (
                <Link
                  to="/account"
                  className="flex items-center gap-2 bg-accent text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm hover:opacity-90 transition-all shadow-sm"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden md:inline">Личный кабинет</span>
                </Link>
              )}

              <button
                className="lg:hidden text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="text-primary hover:text-light transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
